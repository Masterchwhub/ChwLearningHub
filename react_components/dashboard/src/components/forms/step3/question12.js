import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';


const Question12 = ({dataFromChild12}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep13 = 13

        dataFromChild12(goToStep13)
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Trustworthy', checked: false },
        { id: 2, label: 'Compassive', checked: false },
        { id: 3, label: 'Humble', checked: false },
        { id: 4, label: 'Community-oriented', checked: false },
        { id: 5, label: 'Self-aware and understanding', checked: false },
        { id: 6, label: 'Open-minded', checked: false },
        { id: 7, label: 'Empathetic', checked: false },
        { id: 8, label: 'Personal strength and courage', checked: false },
        { id: 9, label: 'Passion for serving in the community', checked: false },
        { id: 10, label: 'Committed to social justice', checked: false },
        { id: 11, label: 'Critical thinking', checked: false },
      ]);

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            )
        );
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#143f6a'}}>
            <h4>What qualities do you consider most important to you as a CHW?</h4>
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
            
            <div className="mb-6" >
                <StepButton onClick={() => nextStep(10)} className={activeButton && nextStepButton === 10 ? 'next' : 'button' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question12;
