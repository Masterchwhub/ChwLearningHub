import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../styles/Profile.css'; 
import {  } from "../App.css";

const Profile = () => {
  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">
        <img
          src="react_components\dashboard\src\img\img_avatar.png" 
          width="150"
          height="150"
          className="d-inline-block align-top rounded-circle"
          alt="Img"
        />
      </Navbar.Brand>

      <Nav className="mr-auto flex-column">
        <h1 className='title-h1'style={{ paddingTop: '20px', fontWeight: 'bold'}}>Andrea Quecán</h1>
        <p style={{ fontSize: '18px' ,color: '#143F6A' }}>Current Job Title / Designation</p>
        <p style={{ fontSize: '15px' ,fontWeight: 'bold', color: '#646464'}} >Add introduction: Example</p>
        <p style={{ paddingBottom:'10px', fontSize: '15px',  fontWeight: 'bold', color: '#646464'}}>Dedicated Community Health Worker (CHW) with a passion for improving the well-being of her community. Born and raised in a small town, Andrea witnessed firsthand the health disparities and lack of access to healthcare services. </p>
        <div>
          <p style={{ fontSize: '15px',  fontWeight: 'bold', color: '#646464' }}>Areas of interest <br></br>
Community Engagement / Outreach <br></br>
Community Education</p>
        </div>
        <div>
          <p style={{ fontSize: '15px',  fontWeight: 'bold' , color: '#646464'}}>Bogotá, Colombia</p>
        </div>
        <div>
          <p style={{ fontSize: '15px',  fontWeight: 'bold' , color: '#646464'}}>Language Proficiency <br></br>
          Spanish, French, English
          </p>
        </div>
        <div>
          <p style={{ paddingBottom:'0px',fontSize: '15px',  fontWeight: 'bold', color: '#47BBC6', }}>
          + Add your language proficiency levels
          </p>
        </div>
        <Button style={{color: 'white', background: '#FF8A34', width: '11rem', height: '3.5rem', border: '1px solid #FF8A34'
}}>Complete your profile <br></br> 10% </Button>
      </Nav>
    </Navbar>
  );
};

export default Profile;
