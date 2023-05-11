import React, { useState } from "react";
import { Label, Input } from "reactstrap";

const TextInput = ({ label, type, value, onChange, placeholder }) => {
  const [isClicked, setIsClicked] = useState(false);

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid",
    transition: "border-bottom-color 0.1s ease",
    borderBottomColor: isClicked ? "#02a499" : "",
  };

  return (
    <>
      <Label className="mb-0">{label}</Label>
      <Input
        type={type}
        style={inputStyle}
        onClick={() => setIsClicked(true)}
        onBlur={() => setIsClicked(false)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></Input>
    </>
  );
};

export default TextInput;

