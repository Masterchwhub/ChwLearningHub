import React from 'react';
import '../styles/Profile.css'; 
import '../styles/ButtonSkills.css'; 
import ButtonSkills from './ButtonSkills';


const ActivitiesCard = ({ color, subtitle, text1, text2, text3}) => {
  return (
    <div style={{ paddingBottom: '50px'}}>
        <div className="title-h1 my-4">Activities in progress</div>
            <div className="card" style={{ border:'none'}}>
            <div className="card-body" style={{ width: "800px", height:"230px", backgroundColor: '#143F6A' , color: 'white', borderRadius: '10px'}}> 
                <div className="row">
                    <div className="col-6">
                        <img  src="react_components\dashboard\src\img\activities.svg" width="320"
                        height="180"  alt="Card image cap"/>
                    </div>
                    <div className="col-5">
                        <div className="row" >
                            <h5 className="card-title">{subtitle}</h5>
                            <p className="card-text">{text1}</p>
                            <div className="card-text-container">
                            <p className="card-text">{text2}</p>
                            <p className="card-text">{text3}</p>
                            <button className="button-skills-md2">Continue learning</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-2 float-right mt-5">
                            <button className="button-skills-md">Continue learning</button>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default ActivitiesCard;
