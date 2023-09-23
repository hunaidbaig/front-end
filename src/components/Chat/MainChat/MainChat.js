import React, { useState } from 'react'
import Input from "../Input/Input"
import Response from '../response/Response';
import "./mainChat.css"
import { FaArrowRight, FaBars} from "react-icons/fa";




const MainChat = ({ toggle, toggleHandle })=>{
    const [text, setText] = useState('');
    const [conversationList, setConversationList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [responseResult, setResponseResult] = useState('');

    const inputHandle = (e)=>{
        e.preventDefault();

        setLoading(false);

        const newComponent = <Input text={text} />;
        const reponseComponent = <Response loading={loading} responseResult={responseResult} />;

        setConversationList([...conversationList, newComponent, reponseComponent]);

        setText('')


        fetch(`http://127.0.0.1:5000/query/${text}`)
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



    return (
        <main className="chat">
            {
                toggle ? 
                <div className='my-toggle'>
                    <button onClick={()=> toggleHandle()} ><FaBars/></button>
                </div>    
                 : <></>
               
            }

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
            <form onSubmit={(e)=> inputHandle(e)} className='input-container'>
                <input onChange={(e)=> setText(e.target.value)} value={text} placeholder="Send a message" type="text" className='chat-input'/>
                <button onClick={(e)=> inputHandle(e)} ><FaArrowRight/></button>
            </form>
        </main>
    )
}

export default MainChat;