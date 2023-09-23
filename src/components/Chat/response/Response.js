import React from "react";
import "./response.css";
import { FaGg} from "react-icons/fa";
import { BeatLoader } from "react-spinners";


function Response({ loading, responseResult }) {
  return (
    <div className='container-response'>
      <span><FaGg/></span>
      {
        !loading ? <BeatLoader size={15}  color="#0b87f8" style={{ backgroundColor: 'transparent' }} />
        :  
        <p>
          {responseResult}
        </p>
      }
   
    </div>
  );
}

export default Response;
