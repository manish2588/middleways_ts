import React from 'react';
import {easeIn, easeInOut, easeOut, motion} from 'framer-motion'
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
    <motion.button
      type={type}
      onClick={handleClick}
      className={className}
      style={style}
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:0.5,type:"spring",damping:20,stiffness:200}}
    >
      {label}
    </motion.button>
  );
};

export default Button;
