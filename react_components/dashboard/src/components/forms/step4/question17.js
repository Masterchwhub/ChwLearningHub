import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';
import './test.css'; 


const Question17 = ({dataFromChild17}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep18 = 18

        dataFromChild17(goToStep18)
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#372bc4'}}>
            <h4>When you are happy, what are you most likely to do?</h4>
        </div>
        <div className="col-4">
            <div>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                        Smile from ear to ear
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Talk up a storm
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Act really excited
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    Be calm and worry free
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

export default Question17;
