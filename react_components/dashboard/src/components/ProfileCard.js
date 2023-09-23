import React, { useState } from 'react';
import '../styles/Profile.css'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css'

const ProfileCard = ({ color, title, subtitle, text, text2, wwwroot, usersData}) => {
  let imgProfileCard = wwwroot + "/theme/moove/react_components/dashboard/src/img/img_avatar.png";

  if (usersData !== undefined && usersData !== null && usersData.length !== undefined && usersData.length > 0) {
    if (usersData[0].profileimageurl !== undefined && usersData[0].profileimageurl !== null && usersData[0].profileimageurl !== '') {
        imgProfileCard = usersData[0].profileimageurl;
    }
    subtitle = subtitle + usersData[0].firstname + '!';
  }

  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div className="container">
        <div className="row">
            <div className="col-1"/>
            <div className="col-5 mr-4 card"style={{ marginTop:'50px', padding: 0}}>
                <div className="card-body" style={{ height:"235px", paddingLeft:'130px', paddingTop: '100px', backgroundColor: color , color: 'white', borderRadius: '5px'}}>
                    <h5 className="card-title" style={{ paddingBottom: "20px"}}>{subtitle}</h5>
                    <p className="card-text">{text}</p>
                    <p className="card-text">{text2}</p>
                </div>
            </div>
            <div className="col-5 card"style={{ marginTop:'50px', padding: 0}}>
                <div className="card-body p-0" style={{ height:"235px", backgroundColor: color , color: 'white', borderRadius: '5px'}}>
                    <div className="row">
                        <div className="col-8 ">
                            <h5 className="card-title mb-0" style={{ backgroundColor: '#F4F4F4' , color: '#143d6a',paddingLeft: '10px'}}>Calendar</h5>
                                <Calendar onChange={onChange} value={date} /> 
                        </div>
                        <div className="col-4 mt-6">
                            <h5 className="card-title mb-0" style={{ }}>23 September</h5>
                            <p className="card-text">Webinar</p>
                            <p className="card-text">10:30am - 11:30am</p>
                            <p className="card-text">Schedule</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-profile"> 
                <img
                src={imgProfileCard}
                width="150"
                height="150"
                className="d-inline-block align-top rounded-circle"
                alt="Img"
                />
            </div>
            <div style={{position:'relative' , left:'275px', bottom:'280px'}}> 
                <h6 className="title-h1" style={{ textAlign: "left" }}>{title}</h6>
            </div>
        </div>
    </div>
);
};

export default ProfileCard;
