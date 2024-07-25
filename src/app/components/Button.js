import React from 'react';

const Button = ({ type = "button", onClick, className, style, label, href }) => {
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
