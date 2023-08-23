import React from 'react';
import '../styles/Profile.css'; 
import ButtonSkills from './ButtonSkills';


const ProfileCard = ({ color, title, subtitle, text, text2 }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-4 img-profile"> 
                <img
                src="react_components\dashboard\src\img\img_avatar.png" 
                width="150"
                height="150"
                className="d-inline-block align-top rounded-circle"
                alt="Img"
                />
            </div>
            <div className="col-4" style={{top: '100px', right:' 100px;'}}> 
            <h6 className="title-h1" style={{ textAlign: "left" }}>{title}</h6>
            </div>
            <div className="card" >
                <div className="card-body" style={{ width: "800px", height:"180px", paddingLeft: '200px', backgroundColor: color , color: 'white', borderRadius: '10px'}}>
                <h5 className="card-title" style={{ paddingBottom: "35px"}}>{subtitle}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text">{text2}</p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-4"  style={{left: '150px'}}> 
                    <ButtonSkills text="Profile"></ButtonSkills>
                    <ButtonSkills text="Activities"></ButtonSkills>
                    <ButtonSkills text="Forum"></ButtonSkills>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProfileCard;
