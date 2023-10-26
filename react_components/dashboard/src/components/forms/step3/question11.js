import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';
import CustomInput from '../../shared/inputs/CustomInput';


const Question11 = ({dataFromChild11}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep12 = 12

        dataFromChild11(goToStep12)
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Learn and advance my personal development', checked: false },
        { id: 2, label: 'Browse tools to share with my community', checked: false },
        { id: 3, label: 'Connect with other CHWs, share experiences, and participate in the forum', checked: false },
        { id: 4, label: 'A CHW space to build and save my information', checked: false },
        { id: 5, label: 'Understand the elements of a successful CHW approach', checked: false }
      ]);

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            )
        );
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#143f6a'}}>
            <h4>What skills do you seek to improve?</h4>
        </div>
        <div className="col-4">
            <div className="mb-2" >
                {checkboxes.map((checkbox) => (
                        <CustomCheckbox
                        key={checkbox.id}
                        label={checkbox.label}
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                ))}
            </div>
            <div className="mb-2" >
                <CustomInput
                    placeholder="Other"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            
            <div className="mb-6" >
                <StepButton onClick={() => nextStep(10)} className={activeButton && nextStepButton === 10 ? 'next' : 'button' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question11;
