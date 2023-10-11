import React from 'react';
import Profile from '../pages/Profile';
import Card from '../components/shared/cards/Card';
import Input from '../components/shared/inputs/Input';
import Warning from '../components/shared/warnings/Warning';
import '../styles/Profile.css'; 

const FullProfile = (props) => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-4">
              <Profile></Profile>
            </div>
        
            <div className="col-8" style={{ backgroundColor: 'white' }}>
              <div className="row"  style={{ paddingBottom: '20px' }}>
                <div className="col-6">
                <h1 className='title-h1-chws'>Welcome to your CHW Space</h1>
                </div>
              </div>
              <div>
                <Warning></Warning>
              </div>
              <div className="row" style={{ paddingTop: "30px" }}>
      <div className="col">
        <Card color="#143F6A" title="Hours of Training" imageUrl="https://www.chwlearninghub.org/pix/ico/dash/ico_time-training-white.svg" />
      </div>
      <div className="col">
        <Card color="#143F6A" title="Certificates" imageUrl="https://www.chwlearninghub.org/pix/ico/dash/ico_certificates-white.svg" />
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

export default FullProfile;
