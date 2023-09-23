import React from "react";
import "./Input.css"

function Input({text}) {
  return (
    <div className="container-input">
      <span>M</span> <p>
        {text}
      </p>
    </div>
  );
}

export default Input;
