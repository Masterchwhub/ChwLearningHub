import React from 'react';
import '../styles/Profile.css'; 


const ProfileCard = ({ color, title, subtitle, text, text2, wwwroot, usersData}) => {
  let imgProfileCard = wwwroot + "/theme/moove/react_components/dashboard/src/img/img_avatar.png";

  if (usersData !== undefined && usersData !== null && usersData.length !== undefined && usersData.length > 0) {
    if (usersData[0].profileimageurl !== undefined && usersData[0].profileimageurl !== null && usersData[0].profileimageurl !== '') {
        imgProfileCard = usersData[0].profileimageurl;
    }
    subtitle = subtitle + usersData[0].firstname + '!';
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-1"/>
            <div className="col-5 mr-4 card"style={{ marginTop:'50px', padding: 0}}>
                <div className="card-body" style={{ height:"235px", paddingLeft:'130px', paddingTop: '100px', backgroundColor: color , color: 'white', borderRadius: '10px'}}>
                    <h5 className="card-title" style={{ paddingBottom: "20px"}}>{subtitle}</h5>
                    <p className="card-text">{text}</p>
                    <p className="card-text">{text2}</p>
                </div>
            </div>
            <div className="col-5 card"style={{ marginTop:'50px', padding: 0}}>
                <div className="card-body" style={{ height:"235px", backgroundColor: color , color: 'white', borderRadius: '10px'}}>
                <div className="row">
                    <div className="col-6">

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
