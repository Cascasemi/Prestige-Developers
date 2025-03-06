import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  white?: boolean;
  outline?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = false, 
  white = false,
  outline = false,
  onClick 
}) => {
  let buttonClasses = "px-6 py-3 font-medium rounded transition duration-300 ";
  
  if (primary) {
    buttonClasses += outline 
      ? "border-2 border-konta-orange text-konta-orange hover:bg-konta-orange hover:text-white" 
      : "bg-konta-orange text-white hover:bg-konta-dark";
  } else if (white) {
    buttonClasses += outline 
      ? "border-2 border-white text-white hover:bg-white hover:text-konta-orange" 
      : "bg-white text-konta-orange hover:bg-konta-dark hover:text-white";
  } else {
    buttonClasses += outline 
      ? "border-2 border-konta-dark text-konta-dark hover:bg-konta-dark hover:text-white" 
      : "bg-white text-konta-dark hover:bg-konta-orange hover:text-white";
  }
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;