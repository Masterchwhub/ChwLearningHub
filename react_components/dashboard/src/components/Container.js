import React from 'react';
import Profile from './Profile';
import Button from './Button';
import Card from './Card'; 
import Input from './Input';

const Container = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Profile />
        </div>

        <div className="col-8" style={{ backgroundColor: 'white' }}>
          <h1>Welcome to your CHW Space </h1>

          <div className="row">
            <div className="col-4">
              <Button text="CHW Profile" />
            </div>
            <div className="col-4">
              <Button text="Learnig HUB" />
            </div>
          </div>

          <div className="row" style={{paddingTop: "10px"}}>
            <div className="col-4">
              <Card color="#143F6A" title="IMG 1" />
            </div>
            <div className="col-4">
              <Card color="#143F6A" title="IMG 2" />
            </div>
            <div className="col-4">
              <Card color="#143F6A" title="IMG 3" />
            </div>
          </div>

        <div className='row' style={{paddingTop: "10px"}}>
          <Input></Input>
          <Input></Input>
          <Input></Input>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
