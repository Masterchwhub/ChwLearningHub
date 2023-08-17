import React from 'react';
import Button from './Button';

const Input = () => {
  return (
    <div className="col-16" style={{ backgroundColor: 'white' }}>
      <div className="row" style={{ paddingBottom: '20px' }}>
        <div className="col-10">
          <h1 className="title-h1">
            My trainings
          </h1>
          <p>
            In this section, you will be able to see the trainings within the Hub, and you can also view your external trainings, which you need to upload individually.
          </p>
        </div>
        <div className="col-2">
          <Button text="Dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Input;
