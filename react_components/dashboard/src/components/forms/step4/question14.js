import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';
import './test.css'; 


const Question14 = ({dataFromChild14}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep15 = 15

        dataFromChild14(goToStep15)
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#372bc4'}}>
            <h4>Which book would you be inclined to read?</h4>
        </div>
        <div className="col-4">
            <div>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                        A book with lots of pictures
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    A book with lots of words
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    A book with word searches or crossword puzzles
                    </div>
                </div>
            </button>
            <button className='button mb-4' type="button" >
                <div className='row'>
                    <div className='col-3'>
                        <img src="react_components\dashboard\src\icons\book_icon.svg" alt="img" class="img-fluid"/>
                    </div>
                    <div className='col-9'>
                    An audio book
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

export default Question14;
