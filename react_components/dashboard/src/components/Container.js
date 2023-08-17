import React from 'react';
import Profile from './Profile';
import Button from './Button';
import Card from './Card'; 
import Input from './Input';
import Warning from './Warning';
import {  } from "../App.css";
import {  } from "../styles/Profile.css";

const Container = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Profile />
        </div>
    
        <div className="col-8" style={{ backgroundColor: 'white' }}>
          <div className="row"  style={{ paddingBottom: '20px' }}>
            <div className="col-6">
            <h1 className='title-h1'>Welcome to your CHW Space</h1>
            </div>
            <div className="col-2 text-end">
              <Button text="Dashboard" />
            </div>
          </div>
          <div>
            <Warning></Warning>
          </div>
          <div className="row" style={{paddingTop: "10px"}}>
            <div className="col-4">
              <Card color="#143F6A" title="Hours of Training" />
            </div>
            <div className="col-4">
              <Card color="#143F6A" title="Certificates" />
            </div>
            <div className="col-4">
              <Card color="#143F6A" title="Assesments" />
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
