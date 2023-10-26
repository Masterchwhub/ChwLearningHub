import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';
import './test.css'; 


const Question15 = ({dataFromChild15}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep16 = 16

        dataFromChild15(goToStep16)
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#372bc4'}}>
            <h4>When in a new place, how do you find your way around?</h4>
        </div>
        <div className="col-4">
            <div>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                     Look for a map or directory that shows you where everything is
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Ask someone for directions
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Just start walking around until you find what you’re looking for
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Walk around while stopping to touch objects you may find interesting.
                    </div>
                </div>
            </button>
            </div>
            <div className="mb-6" >
                <StepButton onClick={() => nextStep(10)} className={activeButton && nextStepButton === 10 ? 'next' : 'button' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question15;
