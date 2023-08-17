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
        <h1 className='title-h1'>Andrea Quecán</h1>
        <p>Current Job Title / Designation</p>
        <h5>Add introduction: Example</h5>
        <p>Con estos estilos, la imagen redonda se posicionará en la mitad del fondo gris, pero no estará completamente dentro de él. La combinación de las propiedades</p>
        <Button>Complete your profile</Button>
      </Nav>
    </Navbar>
  );
};

export default Profile;
