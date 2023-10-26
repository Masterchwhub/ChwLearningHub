import React from 'react';
import './styles/StepButton.css'; 

const StepButton = ({ text, onClick, className }) => {

  return (
    <div>
      <button class={className} type="button" onClick={onClick}>{text}</button>
    </div>
  );
};

export default StepButton;
