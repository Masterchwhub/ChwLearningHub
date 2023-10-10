import React from 'react';
import '../../styles/Profile.css'; 
import ButtonSkills from './ButtonSkills';


const InterestCard = ({ img, text }) => {
    console.log('img', img)
  return (
    <div>
        <div className="card my-2" style={{width: "270px", height:'75px', borderRadius: '10px', borderColor:'#47BBC6'}}>
            <div className="card-body" style={{color: '#666666', borderRadius: '10px'}}> 
                <div className="row">
                    <div className="col-4 pr-0">
                        <img src={img}></img>
                    </div>
                    <div className="col-6 mt-2 px-0">
                        <div className="row" >
                            <p className="card-text">{text}</p>
                        </div>
                    </div>
                    <div className="col-1 ml-2 mt-3">
                        <div className="row" >
                            <img src='react_components/dashboard/src/img/next_icon.svg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InterestCard;
