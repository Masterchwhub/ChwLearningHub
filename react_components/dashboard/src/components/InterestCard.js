import React from 'react';
import '../styles/Profile.css'; 
import ButtonSkills from './ButtonSkills';


const InterestCard = ({ color, text }) => {
  return (
    <div>
            <div className="card my-2" style={{width: "300px", backgroundColor: color , color: 'gray', borderRadius: '10px'}}>
            <div className="card-body" style={{backgroundColor: color , color: 'gray', borderRadius: '10px'}}> 
                <div className="row">
                    <div className="col-5">
                        <img  src="react_components\dashboard\src\img\activities.png"   width="80"
                        height="80"  alt="Card image cap"/>
                    </div>
                    <div className="col-6">
                        <div className="row" >
                            <p className="card-text">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InterestCard;
