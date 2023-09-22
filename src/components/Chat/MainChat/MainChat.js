import React from 'react'
import Input from "../Input/Input"
import Response from '../response/Response';
import "./mainChat.css"
import { FaArrowRight} from "react-icons/fa";
const MainChat = ({ toggle, toggleHandle })=>{

    return (
        <main className="chat">
            {/* {
                toggle ? <button onClick={()=> toggleHandle()}>toggle</button> : <></>
            } */}

           <div className='chat-messages'>
            <Input/>
            <Response/>
            <Input/>
            <Response/>
            <Input/>
           </div>
            <div className='input-container'>
                <input  placeholder="Send a message" type="text" className='chat-input'/>
                <button><FaArrowRight/></button>
            </div>
        </main>
    )
}

export default MainChat;