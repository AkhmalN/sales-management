import React from "react";

interface FragmentsProps {
  title: string;
  count: number;
  icon: React.ReactElement;
  bgColor: string;
  iconColor: string;
}

const Fragments: React.FC<FragmentsProps> = ({
  title,
  count,
  bgColor,
  icon,
  iconColor,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-full h-auto sm:h-[116px] bg-white rounded-xl px-4 sm:px-6 py-4 sm:py-2 gap-4 shadow-sm">
      <div className="flex-shrink-0">
        <div
          className={`${bgColor} bg-opacity-10 rounded-full w-14 h-14 flex justify-center items-center`}
        >
          {React.cloneElement(icon, {
            className: `w-8 h-8 sm:w-10 sm:h-10 ${iconColor}`,
          })}
        </div>
      </div>

      <div className="flex flex-col items-center sm:items-start w-full">
        <p className="font-extrabold text-opacity-70 text-[#000000] text-[20px] sm:text-[25px] font-text">
          {count}+
        </p>
        <p className="font-normal text-opacity-70 text-[#030229] text-[12px] sm:text-[14px] font-text text-center sm:text-left">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Fragments;
