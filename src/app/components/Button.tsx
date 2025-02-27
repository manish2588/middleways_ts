import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; 
  onClick?: () => void; 
  className?: string; 
  style?: React.CSSProperties; 
  label: string; 
  href?: string; 
}

const Button: React.FC<ButtonProps> = ({ type = "button", onClick, className, style, label, href }) => {
  const handleClick = () => {
    if (href && typeof window !== 'undefined') {
      window.location.href = href; 
    }
    if (onClick) {
      onClick(); 
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
