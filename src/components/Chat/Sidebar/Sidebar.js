import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import { FaBars} from "react-icons/fa";

import "./sidebar.css";
const Sidebar = ({ toggle, toggleHandle }) => {
  const { user, logOut } = useUserAuth();
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

  return (
    <div className='sidebar'>
      <div className='flex-1'>
        <button className='new-chat'>+ NewChat</button>
        <button><FaBars/></button>
      </div>
      <div className='chats'>
        <p>previous chats...</p>
      </div>
      <div className='flex-2'>
        <button onClick={handleLogOut}>Log out</button>
        <p className="user">
          <span>{initials}</span> {user.email}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
