import React from 'react';
import './Button.css';

const Button = ({ text }) => {
  return (
    <button className="sign-up-button" type="submit">
      {text}
    </button>
  );
};

export default Button;
