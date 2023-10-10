import React, { useState, useEffect} from 'react';
import Button from '../components/shared/Button';
import StepButton from '../components/shared/steps/StepButton';
import StepProgress from '../components/shared/steps/StepProgress';


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
    <div className='container'>
        <div className="row" style={{borderRight: '4px solid #eee;'}}>
            <div className="col-1"/>
            {
                activateSteps ? (
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
                ) : 
                (
                    <div className="card col-10" style={{ paddingBottom: '60px', backgroundColor: '#ddd' , color: 'white', borderRadius: '5px'}}>
                        <div className="row mt-6">
                            <div className="col-4">
                                IMG
                                <img src="react_components/dashboard/src/icons/event_icon.svg"/>
                            </div>
                            <div className='col-6 mt-6'>
                                <h4 className='card-title' style={{color: '#143F6A'}}>Hi Andrea</h4>
                                <h5 className='card-title' style={{color: '#143F6A'}}>Welcome to the CHW Learning Hub!</h5>
                                <p className='card-text' style={{color: '#646464'}}>Complete your profile and unlock the full potential of your learning journey. By providing comprehensive information, 
                                you can create a standout resume, track your progress, and access personalized opportunities.
                                Let’s make your CHW Learning Hub experience remarkable. Complete your profile and embark on an enriching journey today!</p>
                            </div>
                            <div className="col-5"/>
                            <div className="col-4 mt-6 ">
                                <a style={{ fontSize: '13px' ,color: '#143F6A' }}>
                                    Skip to Dashboard // My CHW Space</a>
                            </div>
                            <div className='col-2 mt-6'>
                                <Button type="submit" text={'Begin'} style={false}  onClick={handleClick}/>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="col-1"/>
        </div>
    </div>
  );
};

export default StepsForm;
