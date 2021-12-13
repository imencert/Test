import React from "react";
import "./Button.scss";

const Button = ({ label, variant, click }) => {
  return (
    <button className={`Button ${variant}`} onClick={click}>
      {label}
    </button>
  );
};

export default Button;
