import React, { useState } from 'react';
// import Card from './Card';
// import Input from './Input';
// import Warning from './Warning';
import HomeProfile from '../pages/HomeProfile';
import MoodleWs from "../services/moodlews";
import FullProfile from '../pages/FullProfile';

const Container = (props) => {
  const moodleWsInstance = new MoodleWs(props.sesskey, props.wwwroot);

  let usersData = [''];
  let userWs = moodleWsInstance.getMoodleUser(parseInt(props.userid));
  if (userWs) {
    usersData = userWs;
  }

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="container">
      <div className="navbar">
        <button
          className={`navbar-button ${activeButton === 'profile' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('profile')}
        >
          Profile
        </button>
        <button
          className={`navbar-button ${activeButton === 'dashboard' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`navbar-button ${activeButton === 'chws' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('chws')}
        >
          chws
        </button>
        <button
          className={`navbar-button ${activeButton === 'form' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('form')}
        >
          Form
        </button>
      </div>

      <div className="row">
        <div className="col-12">
          {activeButton === 'profile' && (
            <FullProfile usersData={usersData} wwwroot={props.wwwroot} />
          )}
          {activeButton === 'dashboard' && (
            <HomeProfile usersData={usersData} wwwroot={props.wwwroot}></HomeProfile>
          )}
          {activeButton === 'menu' && <div>Hola Menu</div>}
          {activeButton === 'chws' && <div>Hola chws</div>}
          {activeButton === 'form' && <div>Hola form</div>}
        </div>
      </div>
    </div>
  );
};

export default Container;
