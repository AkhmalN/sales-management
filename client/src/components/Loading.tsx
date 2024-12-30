import React from "react";
import { FaSpinner } from "react-icons/fa";

interface loadingProps {
  size: "small" | "medium" | "big";
  color: "white" | "primary";
}

const Loading: React.FC<loadingProps> = ({ color = "white", size }) => {
  let fontSize;

  switch (size) {
    case "small":
      fontSize = "text-[20px]";
      break;
    case "medium":
      fontSize = "text-[30px]";
      break;
    default:
      fontSize = "text-[40px]";

      break;
  }

  return (
    <div>
      <FaSpinner
        className={`${
          color === "primary" ? "text-saas-primary" : "text-white"
        } ${fontSize} animate-spin duration-300`}
      />
    </div>
  );
};

export default Loading;
