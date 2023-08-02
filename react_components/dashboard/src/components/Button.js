import React from 'react';

const Button = ({ text }) => {
  const buttonStyle = {
    backgroundColor: '#143F6A',
    color: "white",
    border: 'none',
    padding: '10px 30px',
    borderRadius: '10px',
    fontSize: '15px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button type="button" style={buttonStyle}>{text}</button>
    </div>
  );
};

export default Button;
