const MainChat = ({ toggle, toggleHandle })=>{
    return (
        <main className="chat">
            {
                toggle ? <button onClick={()=> toggleHandle()}>toggle</button> : <></>
            }
            MainChat
        </main>
    )
}

export default MainChat;