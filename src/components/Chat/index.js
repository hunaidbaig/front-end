import { useState } from "react";
import MainChat from "./MainChat/MainChat";
// import Sidebar from "./Sidebar/Sidebar";

import './style.css'

const Chat = ()=>{

    const [toggle, setToggle] = useState(false)

    const toggleHandle = ()=>{
        setToggle(!toggle)
    }


    return (
        <div className="chat-container">
            {/* <Sidebar toggle={toggle} toggleHandle={toggleHandle} /> */}
            <MainChat toggle={toggle} toggleHandle={toggleHandle} />
        </div>
    )
}

export default Chat;