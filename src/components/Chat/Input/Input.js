import React from "react";
import "./Input.css"
import { useState, useEffect } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";

function Input({text}) {
  const { user} = useUserAuth();
  const [initials, setInitials] = useState();

  useEffect(() => {
    if (user?.email) {
      setInitials(user.email.substring(0, 1).toUpperCase());
    }
  }, [user.email]);
  return (
    <div className="container-input">
      <span>{initials}</span> <p>
        {text}
      </p>
    </div>
  );
}

export default Input;
