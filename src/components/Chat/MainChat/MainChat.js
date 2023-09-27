import React, { useState } from 'react'
import Input from "../Input/Input"
import { FaSave } from 'react-icons/fa';
import "./mainChat.css"
import { FaArrowRight, FaBars } from "react-icons/fa";
import { BiLogOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../context/UserAuthContext';




const MainChat = ({ promptList ,toggle, toggleHandle, conversationList, typingBtn, setTypingBtn, inputHandle, typing, text, setText, setPromptList }) => {
    // const [text, setText] = useState('');
    // const [conversationList, setConversationList] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [typingBtn, setTypingBtn] = useState(true);
    // const [typing, setTyping] = useState(false);
    // const [responseResult, setResponseResult] = useState('');
    const { logOut } = useUserAuth();

    // const inputHandle = (e)=>{
    //     e.preventDefault();

    //     setLoading(false);

    //     const newComponent = <Input text={text} />;
    //     const reponseComponent = <Response loading={loading} responseResult={responseResult} />;

    //     setConversationList([...conversationList, newComponent, reponseComponent]);

    //     setText('')
    //     setTypingBtn(true)
    //     setTyping(true);


    //     fetch(`https://flask-ge2-suierlw5oa-uc.a.run.app/query/${text}`)
    //     .then((respone=> respone.json() )).then(result=>{
    //         const {response} = result;

    //         setConversationList((prevList) => {
    //             const updatedList = [...prevList];
    //             const lastComponent = updatedList[updatedList.length - 1];

    //             updatedList[updatedList.length - 1] = React.cloneElement(lastComponent, { loading: true, responseResult :response });

    //             return updatedList;
    //           });

    //           setResponseResult('')
    //           setLoading(false)
    //           setTyping(false)

    //     }).catch(error=>{

    //         setConversationList((prevList) => {
    //             const updatedList = [...prevList];
    //             const lastComponent = updatedList[updatedList.length - 1];
    //             console.log(lastComponent)

    //             updatedList[updatedList.length - 1] = React.cloneElement(lastComponent, { loading: true, responseResult :'unexpected character' });

    //             return updatedList;
    //           });

    //         console.log('some error occure', error);
    //     })
    // }

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


    const saveHandle = () => {

        setPromptList([...promptList, text ]);
        setText('')
        console.log('save')
    }


    return (
        <main className="chat">

            <nav className='navbar'>
                <div className='mobileBtn'>
                    <button onClick={() => toggleHandle()} ><FaBars /></button>
                </div>

                <div>
                    <Link to={"/"}>
                        <img src={process.env.PUBLIC_URL + "/dist/images/chatge-logo.svg"} width="250px" alt='ge logo' className='navbar-logo' />
                    </Link>
                </div>

                <div onClick={() => handleLogOut()}>
                    <BiLogOut color='white' cursor={'pointer'} />
                </div>

            </nav>

            <div className='chat-messages'>

                {
                    conversationList.map((component, index) => {
                        return (
                            <>
                                <div key={index}>
                                    {component}
                                </div>
                            </>

                        )
                    })
                }
            </div>
            <form onSubmit={(e) => inputHandle(e)} className={toggle ? 'input-full' : 'input-container'}>
                <input disabled={typing} onChange={(e) => {
                    const text1 = e.target.value;
                    setText(text1)
                    setTypingBtn(text1.trim() === '');

                }} value={text} placeholder="Send a message" type="text" className='chat-input' />
                <button disabled={typingBtn} type='submit' className={typingBtn ? 'submitbtnDisbaled' : 'submitbtn'} onClick={(e) => inputHandle(e)} ><FaArrowRight /></button>
                <div style={{ display: 'flex', alignItems: 'center' }} disabled={typingBtn} className={typingBtn ? 'submitbtnDisbaled' : 'Savebtn'} onClick={(e) => saveHandle(e)} ><FaSave /> </div>
            </form>

        </main>
    )
}

export default MainChat;