import React from "react";

interface InputFieldProps {
  placeholder?: String;
  style?: String;
}

const InputField = ({ placeholder, style }: InputFieldProps) => {
  return (
    <input
      type="text"
      placeholder={`${placeholder ?? ""}`}
      className={`w-[400px]  h-[64px]  pl-[16px] py-[25px] text-[#000] border rounded-[8px] placeholder-[#00000099] placeholder:font-medium leading-8 placeholder:text-[20px] ${style}`}
    ></input>
  );
};

export default InputField;
