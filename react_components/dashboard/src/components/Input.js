import React from 'react';

const Input = () => {
  return (
    <div className="container">
      <div className="row" style={{paddingTop: "10px"}}>
        <div className="col">
          <h4>My trainings</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="certificaciones"
            placeholder="Ingrese su certificación"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
