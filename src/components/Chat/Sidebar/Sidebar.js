// import { useState } from "react";

const Sidebar = ({ toggle, toggleHandle })=>{

    
    return (
        <aside className={`${ toggle ? "toggle-sidebar": 'sidebar'}`}>
             <button onClick={()=> toggleHandle()}>toggle</button>
            Sidebar
        </aside>
    )
}

export default Sidebar;