import React, { useState } from 'react';
import './styles/CustomCheckbox.css'; // Import your custom CSS file

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-checkmark"></span>
      {label}
    </label>
  );
};

export default CustomCheckbox;