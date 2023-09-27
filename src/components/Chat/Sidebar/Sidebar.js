import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import { AiOutlineFileAdd } from 'react-icons/ai';
import "./sidebar.css";
import { BiLogOut } from "react-icons/bi";



const Sidebar = ({ toggle, toggleHandle, faqsHandle }) => {
  
  const { user, logOut } = useUserAuth();
  const [ promptList, setPromptList ] = useState([])
  const [initials, setInitials] = useState();

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
        <p onClick={(e)=> faqsHandle(e)} > Give bullets points What role does the Finance department play in the onboarding renewalprocess of ITPs?</p>
        <p onClick={(e)=> faqsHandle(e)} > How long does the long-term contract last with distributors?</p>
      </div>
      <div className='flex-faqs'>
        <p className='prompts'>My Prompts <span onClick={(e)=> promptHandle(e)} > <AiOutlineFileAdd /> </span> </p>
        {/* <button onClick={()=> toggleHandle()} ><FaBars/></button> */}
      </div>
      <div className='prompts-chats'>

        {
          promptList.length === 0 ? <p>You have no Prompts</p> 
          :
          promptList.map((questions, index) =>(
            <p key={index}>{questions}</p>
          ))
        }
        
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
