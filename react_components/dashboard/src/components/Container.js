import React from 'react';
import Profile from './Profile';
import {  } from "./ButtonSkills";
import Card from './Card'; 
import Input from './Input';
import {  } from "./Input";
import Warning from './Warning';
import {  } from "../App.css";
import {  } from "../styles/Profile.css";
import { useState } from 'react'
import HomeProfile from '../pages/HomeProfile'

const Container = () => {

  const [show, setShow] = useState(false);
    
    const Routes = (show) =>{
      console.log('ingrespo')
        if (show) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

  return (
    <div className="container">
      <button class="navbar-button" type="button" onClick={() =>{Routes(true)}}>Profile</button>
      <button class="navbar-button" type="button" onClick={() =>{Routes(false)}}>Dashboard</button>

      {
        show && 
        <div className="row">
        <div className="col-4">
          <Profile />
        </div>
    
        <div className="col-8" style={{ backgroundColor: 'white' }}>
          <div className="row"  style={{ paddingBottom: '20px' }}>
            <div className="col-6">
            <h1 className='title-h1'>Welcome to your CHW Space</h1>
            </div>
            {/* <div className="col-2 text-end" style={{ paddingLeft: '41rem' }}>
              <Button text="Dashboard" />
            </div> */}
          </div>
          <div>
            <Warning></Warning>
          </div>
          <div className="row" style={{ paddingTop: "30px" }}>
        <div className="col-4">
          <Card color="#143F6A" title="Hours of Training" imageUrl="https://www.chwlearninghub.org/pix/ico/dash/ico_time-training-white.svg" />
        </div>
        <div className="col-4">
          <Card color="#143F6A" title="Certificates" imageUrl="https://www.chwlearninghub.org/pix/ico/dash/ico_certificates-white.svg" />
        </div>
        <div className="col-4">
          <Card color="#143F6A" title="Assessments" imageUrl="https://www.chwlearninghub.org/pix/ico/dash/ico_assessment-course-white.svg" />
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
      }

      <HomeProfile></HomeProfile>
    </div>
  );
};

export default Container;
