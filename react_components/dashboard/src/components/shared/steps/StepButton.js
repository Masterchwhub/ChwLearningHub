import React from 'react';
import './styles/StepButton.css'; 

const StepButton = ({ text, onClick }) => {
  return (
    <div>
      <button class="button" type="button" onClick={onClick}>{text}</button>
    </div>
  );
};

export default StepButton;
