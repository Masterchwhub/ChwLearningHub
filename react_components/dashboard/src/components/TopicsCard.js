import React from 'react';
import '../styles/Profile.css'; 
import ButtonSkills from './ButtonSkills';


const TopicsCard = ({ title, subtitle, text }) => {
  return (
    <div>
        <div className="card" style={{width: "350px", height:"465px", marginRight: "20px"}}>
        <img class="card-img-top" src="react_components\dashboard\src\img\prueba.jpg" style={{height: "150px"}}  alt="Card image cap"/>
            <div className="card-body">
                <h5 className="title-h1">{title}</h5>
                <p style={{color:"gray"}}>{subtitle}</p>
                <p className="card-text">{text}</p>
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style={{marginTop: "10px", marginRight: "30rem", marginBottom: "10px"}}>
                        <path id="circled-horizontal-more-svgrepo-com" d="M3.727,16A12.273,12.273,0,1,1,16,28.273,12.273,12.273,0,0,1,3.727,16ZM16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1ZM9.182,18.045A2.045,2.045,0,1,0,7.136,16,2.045,2.045,0,0,0,9.182,18.045ZM18.045,16A2.045,2.045,0,1,1,16,13.955,2.046,2.046,0,0,1,18.045,16Zm4.773,2.045A2.045,2.045,0,1,0,20.773,16,2.046,2.046,0,0,0,22.818,18.045Z" transform="translate(-1 -1)" fill="#c6cad0" fill-rule="evenodd"/>
                      </svg>
            </div>
        </div>
    </div>
  );
};

export default TopicsCard;
