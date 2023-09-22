import React from 'react';
import '../styles/Profile.css'; 
import '../styles/ButtonSkills.css'; 
import ButtonSkills from './ButtonSkills';


const ActivitiesCard = ({ color, subtitle, text1, text2, text3}) => {
  return (
    <div class="container mt-5">
         <div className="title-h1 my-4">Activities in progress</div>
    <div class="card">
        <div class="card-body"  style={{ width: "655px", backgroundColor: '#143F6A' , color: 'white', borderRadius: '10px'}}>
            <div class="row">
                <div class="col-md-4">
                    <img src="react_components\dashboard\src\img\activities.svg" alt="img" class="img-fluid"/>
                </div>
                <div class="col-md-8">
                    <h5 className="card-title">{subtitle}</h5>
                    <p className="card-text" style={{  color: '#ABB3CD'}}>{text1}</p>
                    <div className="card-text-container">
                        <p className="card-text">{text2}</p>
                        <p className="card-text">{text3}</p>
                        <button className="button-skills-md2">Continue learning</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ActivitiesCard;
