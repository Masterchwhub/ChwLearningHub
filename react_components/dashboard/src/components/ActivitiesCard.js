import React from 'react';
import '../styles/Profile.css'; 
import ButtonSkills from './ButtonSkills';


const ActivitiesCard = ({ color, subtitle, text1, text2, text3}) => {
  return (
    <div style={{ paddingBottom: '50px'}}>
        <div className="title-h1 my-4">Activities in progress</div>
            <div className="card" style={{ border:'none'}}>
            <div className="card-body" style={{ width: "800px", height:"230px", backgroundColor: color , color: 'white', borderRadius: '10px'}}> 
                <div className="row">
                    <div className="col-4">
                        <img  src="react_components\dashboard\src\img\prueba.jpg" width="220"
                        height="150"  alt="Card image cap"/>
                    </div>
                    <div className="col-5">
                        <div className="row" >
                            <h5 className="card-title">{subtitle}</h5>
                            <p className="card-text">{text1}</p>
                            <div className="card-text-container">
                            <p className="card-text">{text2}</p>
                            <p className="card-text">{text3}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 float-right mt-5">
                            <button className="button-skills-md">Continue learning</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ActivitiesCard;
