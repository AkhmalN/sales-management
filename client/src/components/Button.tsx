import React from "react";
import Loading from "./Loading";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 disabled:bg-aiida-neutral/30 ${
        disabled && "bg-opacity-60"
      } ${className}`}
    >
      {loading ? (
        <div className="flex items-center gap-3">
          <span className="text-slate-200 font-text">Processing</span>
          <Loading size="small" color="white" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
