import React from "react";

interface BadgeProps {
  variant: "success" | "warning" | "danger" | "primary";
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ variant, text }) => {
  let bg;
  let font;
  switch (variant) {
    case "primary":
      bg = "bg-saas-primary";
      font = "text-saas-primary";
      break;
    case "success":
      bg = "bg-saas-blue-sky";
      font = "text-saas-blue-sky";
      break;
    case "warning":
      bg = "bg-saas-orange";
      font = "text-saas-orange";
      break;
    case "danger":
      bg = "bg-saas-danger";
      font = "text-saas-danger";
      break;

    default:
      bg = "bg-saas-blue-sky";
      font = "text-saas-blue-sky";
  }

  return (
    <div className={`w-auto ${bg} rounded-lg bg-opacity-10`}>
      <p
        className={`flex justify-center items-center ${font} font-bold  px-3 py-2 w-auto`}
      >
        {text}
      </p>
    </div>
  );
};

export default Badge;
