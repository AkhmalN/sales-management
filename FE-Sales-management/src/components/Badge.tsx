import React from "react";

interface BadgeProps {
  title: string;
}

const Badge: React.FC<BadgeProps> = ({ title }) => {
  let bg;
  let text;
  switch (title) {
    case "Complete":
      bg = "bg-saas-blue-sky";
      text = "text-saas-blue-sky";
      break;
    case "Pending":
      bg = "bg-saas-orange";
      text = "text-saas-orange";
      break;
    case "Cancel":
      bg = "bg-saas-danger";
      text = "text-saas-danger";
      break;

    default:
      bg = "bg-saas-blue-sky";
      text = "text-saas-blue-sky";
  }

  return (
    <div className={`w-auto ${bg} rounded-lg bg-opacity-10`}>
      <p
        className={`flex justify-center items-center ${text} font-bold  px-3 py-2 w-auto`}
      >
        {title}
      </p>
    </div>
  );
};

export default Badge;
