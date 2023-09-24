import React, { useState } from 'react'
import Input from "../Input/Input"
import Response from '../response/Response';
import "./mainChat.css"
import { FaArrowRight, FaBars} from "react-icons/fa";
import { BiLogOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../context/UserAuthContext';




const MainChat = ({ toggle, toggleHandle })=>{
    const [text, setText] = useState('');
    const [conversationList, setConversationList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [responseResult, setResponseResult] = useState('');
    const { logOut } = useUserAuth();

    
    const inputHandle = (e)=>{
        e.preventDefault();

        setLoading(false);

        const newComponent = <Input text={text} />;
        const reponseComponent = <Response loading={loading} responseResult={responseResult} />;

        setConversationList([...conversationList, newComponent, reponseComponent]);

        setText('')


        fetch(`https://flask-ge2-suierlw5oa-uc.a.run.app/query/${text}`)
        .then((respone=> respone.json() )).then(result=>{
            const {response} = result;

            setConversationList((prevList) => {
                const updatedList = [...prevList];
                const lastComponent = updatedList[updatedList.length - 1];
                
                updatedList[updatedList.length - 1] = React.cloneElement(lastComponent, { loading: true, responseResult :response });
                
                return updatedList;
              });

              setResponseResult('')
              setLoading(false)

        }).catch(error=>{

            setConversationList((prevList) => {
                const updatedList = [...prevList];
                const lastComponent = updatedList[updatedList.length - 1];
                console.log(lastComponent)
                
                updatedList[updatedList.length - 1] = React.cloneElement(lastComponent, { loading: true, responseResult :'unexpected character' });
                
                return updatedList;
              });

            console.log('some error occure', error);
        })
    }

    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
        await logOut();
        localStorage.clear();
        navigate("/");
        } catch (err) {
        console.log(err.message);
        }
    };


    return (
        <main className="chat">
            {/* {
                toggle ? 
                <div className='my-toggle'>
                    <button onClick={()=> toggleHandle()} ><FaBars/></button>
                </div>    
                 : <></>
               
            } */}
               
            <nav className='navbar'>
                    <div className='mobileBtn'>
                        <button onClick={()=> toggleHandle()} ><FaBars/></button>
                    </div>
                    
                <div>
                    {/* <img src={process.env.PUBLIC_URL+"dist/images/Chatge-logo.png"} width={110} alt='ge logo' /> */}
                    <span ><Link style={{ textDecoration:'none', color: '#0b87f8' }} to={'/'}>ChatGE</Link></span>
                    {/* <p sty>Health Care</p> */}
                </div>

                <div onClick={()=> handleLogOut()}>
                    <BiLogOut color='#0b87f8' cursor={'pointer'} />
                </div>
               
            </nav>

           <div className='chat-messages'>

            {
                conversationList.map((component, index)=>{
                    return(
                        <>
                        <div key={index}>
                            {component}
                        </div>
                        </>

                    )
                })
            }
           </div>
            <form onSubmit={(e)=> inputHandle(e)} className= { toggle ? 'input-full': 'input-container'}>
                <input onChange={(e)=> setText(e.target.value)} value={text} placeholder="Send a message" type="text" className='chat-input'/>
                <button className='submitbtn' onClick={(e)=> inputHandle(e)} ><FaArrowRight/></button>
            </form>
        </main>
    )
}

export default MainChat;