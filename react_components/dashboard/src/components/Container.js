import React from 'react';
import Profile from './Profile';
import Button from './Button';
import {  } from "./ButtonSkills";
import Card from './Card'; 
import Input from './Input';
import {  } from "./Input";
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
            <div className="col-2 text-end" style={{ paddingLeft: '41rem' }}>
              <Button text="Dashboard" />
            </div>
          </div>
          <div>
            <Warning></Warning>
          </div>
          <div className="row" style={{paddingTop: "30px"}}>
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

        <div className='row' style={{paddingTop: "3rem"}}>
          <Input titleSkills="My trainings" pSkills="In this section, you will be able to see the trainings within the Hub, and you can also view your external trainings, which you need to upload individually." ></Input>
          <Input titleSkills="Certifications" pSkills="In this section, you will be able to see the certifications within the Hub, and you can also view your external certifications, which you need to upload individually."></Input>
          <Input titleSkills="Skills" pSkills="In this space, you will be able to see the badges you earn after completing the assessments."></Input>
          <Input titleSkills="Activities In Progress" pSkills="In this space, you will be able to see the badges you earn after completing the assessments."></Input>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
