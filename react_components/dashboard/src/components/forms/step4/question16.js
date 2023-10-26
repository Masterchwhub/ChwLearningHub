import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';
import './test.css'; 


const Question16 = ({dataFromChild16}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep17 = 17

        dataFromChild16(goToStep17)
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#372bc4'}}>
            <h4>What are you most likely to do while waiting in line at the supermarket?</h4>
        </div>
        <div className="col-4">
            <div>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Look around at the other items
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Talk to the person next to you in line
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Fidget or use the phone
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Wait silently
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

export default Question16;
