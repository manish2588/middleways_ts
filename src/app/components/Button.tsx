import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; // Define possible types for the button
  onClick?: () => void; // Define the type of onClick handler
  className?: string; // Define the type of className
  style?: React.CSSProperties; // Define the type of style
  label: string; // Define the type for the label (required prop)
  href?: string; // Define the type for href (optional prop)
}

const Button: React.FC<ButtonProps> = ({ type = "button", onClick, className, style, label, href }) => {
  const handleClick = () => {
    if (href && typeof window !== 'undefined') {
      window.location.href = href; // Use window.location.href for navigation
    }
    if (onClick) {
      onClick(); // Call the onClick handler if provided
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={className}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
