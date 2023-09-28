import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import { AiOutlineFileAdd } from 'react-icons/ai';
import "./sidebar.css";
import { BiLogOut } from "react-icons/bi";



const Sidebar = ({ toggle, toggleHandle, faqsHandle,promptList  }) => {
  
  const { user, logOut } = useUserAuth();
  // const [ promptList, setPromptList ] = useState([])
  const [initials, setInitials] = useState();
  const [ showPrompt, setShowPrompt ] = useState(false);
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      setInitials(user.email.substring(0, 1).toUpperCase());
    }
  }, [user.email]);

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

  const promptHandle = (e)=>{
    setShowPrompt(true)
    console.log('hello')
  }

  return (
    <div className={ toggle ? 'toggle-sidebar ': 'sidebar'}>
      <div className='flex-faqs'>
        <p className='faqs'>FAQs</p>
        {/* <button onClick={()=> toggleHandle()} ><FaBars/></button> */}
      </div>
      <div className='chats'>
        <p onClick={(e)=> faqsHandle(e)} > What is the purpose of this procedural document?</p>
        <p onClick={(e)=> faqsHandle(e)} > what role does the Finance department play in the onboarding renewal process of ITPs?</p>
        <p onClick={(e)=> faqsHandle(e)} > What entities does this procedural document apply to?</p>
        <p onClick={(e)=> faqsHandle(e)} > What is the distribution of long term contract?</p>
        <p onClick={(e)=> faqsHandle(e)} > How long does the spot dealers are used?</p>
        <p onClick={(e)=> faqsHandle(e)} > What are the sfdc onboarding docmentation?</p>
        <p onClick={(e)=> faqsHandle(e)} > What are spot dealers and how long they are used?</p>
        <p onClick={(e)=> faqsHandle(e)} > What is aggrement creation template?</p>
      </div>
      <div className='flex-faqs'>
      {/* <span onClick={(e)=> promptHandle(e)} > <AiOutlineFileAdd /> </span> */}
        <p className='prompts'>My Prompts  </p>
        {/* <button onClick={()=> toggleHandle()} ><FaBars/></button> */}
      </div>
      <div className='prompts-chats'>

        {
          promptList.length === 0 ?  <div>You have no Prompts</div> 
          :
          promptList.map((questions, index) =>(
            <p className="letter-transform" key={index} onClick={(e)=> faqsHandle(e)} >{questions}</p>
          ))
        }

        {/* {
          showPrompt ? 
            <div className="prompt-container">
          
              <input type='text' value={'dshsd'} placeholder='Save your prompts' /> 
              <button className="saveBtn">Save</button>
              <button className="cancelBtn" >Cancel</button>
            </div>
            : <></>
        }
         */}
      </div>
      <div className='flex-2'>
        {/* <button onClick={handleLogOut}>Log out</button> */}
        <p className="user">
          <span>{initials}</span> {user.email}
          <div onClick={handleLogOut}><BiLogOut style={{ marginLeft: '5px' }} size={30} color='#0b87f8' cursor={'pointer'} /></div>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
