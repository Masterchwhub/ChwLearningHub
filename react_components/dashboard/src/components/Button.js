import React from 'react';
import '../styles/Button.css'; 
import {  } from "../App.css";

const Button = ({ text, style }) => {

  return (
    <div>
      {
        style ?
          <button class="border-button" type="button" >{text}</button>
          :
          <button class="next-button pl-0" type="button" >{text}</button>
        
      }
    </div>
  );
};


export default Button;
