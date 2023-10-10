import React, { useState, useEffect} from 'react';
import StepButton from '../shared/steps/StepButton';
import StepProgress from '../shared/steps/StepProgress';


const StepsForm = (props) => {

const [activateSteps, setActivateSteps] = useState(false);
const [goDashboard, setGoDashboard] = useState(false);


const handleClick = () => {
    setActivateSteps(true);
    // You can perform other actions here
  };

const BackDashboard = () => {
    setGoDashboard(true);
    // You can perform other actions here
  };


return (
    <div className="col-10">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="card" style={{backgroundColor: '#eee' , color: 'white'}}>
                        <div className="row mt-4 mb-6">
                            <StepProgress />
                        </div>
                        <div className="row"> 
                            <div className="col-3"/>
                            <div className="col-3"  style={{ color: '#47BBC6'}}>
                                <h4>Select your gender </h4>
                            </div>
                            <div className="col-3">
                                <div>
                                    <StepButton text={'Male'}/>
                                </div>
                                <div className="mt-2">
                                    <StepButton text={'Female'}/>
                                </div>
                                <div className="mt-2 mb-6" >
                                    <StepButton text={'Other'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="card" style={{backgroundColor: '#ddd' , color: 'white'}}>
                        <div className="row"> iconos de steps</div>
                        <div className="row"> 
                            <div className="col-3"/>
                            <div className="col-3">
                                <h5>Select your race</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="card" style={{backgroundColor: '#ddd' , color: 'white'}}>
                        <div className="row"> iconos de steps</div>
                        <div className="row"> 
                            <div className="col-3"/>
                            <div className="col-3">
                                <h5>Country of residence</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" style={{ marginTop: '100px' }} href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" style={{ marginTop: '100px' }} href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
  );
};

export default StepsForm;
