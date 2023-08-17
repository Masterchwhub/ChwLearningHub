import React from 'react';
import '../styles/Button.css'; 
import {  } from "../App.css";

const Button = ({ text }) => {

  return (
    <div>
      <button class="border-button" type="button" >{text}</button>
    </div>
  );
};


export default Button;
