import React from 'react';

const CheckBox = ({ label }) => {
  return (
    <div className="form-group">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">{label}</label>
    </div>
  );
};

export default CheckBox;
