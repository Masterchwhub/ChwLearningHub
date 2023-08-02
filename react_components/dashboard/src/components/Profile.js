// Profile.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


const Profile = () => {
  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">
        <img
          src="react_components\dashboard\src\img\img_avatar.png" 
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Img"
        />
      </Navbar.Brand>

      <Nav className="mr-auto flex-column">
        <Nav.Link href="#">Nombre1</Nav.Link>
        <Nav.Link href="#">Apellido1</Nav.Link>
        <Nav.Link href="#">Email</Nav.Link>
        <Nav.Link href="#">Nombre</Nav.Link>
        <Nav.Link href="#">Apellido</Nav.Link>
        <Nav.Link href="#">Email</Nav.Link>
        <Nav.Link href="#">Nombre</Nav.Link>
        <Button>Complete your profile</Button>
      </Nav>
    </Navbar>
  );
};

export default Profile;
