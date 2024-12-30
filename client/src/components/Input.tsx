import React from "react";

interface InputProps {
  className?: string;
  type: string;
  placeholder: string;
  id: string;
  name?: string;
  readOnly?: boolean;
  defaultValue?: string;
  maxLength?: number;
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  placeholder,
  id,
  name,
  readOnly,
  defaultValue,
  maxLength,
  inputMode,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      readOnly={readOnly}
      defaultValue={defaultValue}
      maxLength={maxLength}
      inputMode={inputMode}
      className={`h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 ${className}`}
    />
  );
};

export default Input;
