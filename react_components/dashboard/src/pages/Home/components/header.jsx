// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Import the CSS file for styling (make sure to adjust the path as needed)
import '../style/header.css';

// Import the image for the logo (adjust the path accordingly)
import ElSol from "../img/CHWLearningHUB_Logo.png"


  //traductor de idioma importacion 

  import LanguageSelector from './languageSelector';
// Define a functional component named Header
function Header() {
  

  
  // Use the 'useState' hook to manage the 'menuOpen' state
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state (open/close)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Render the header component
  return (
    <header>
      <nav>
        
  <div className="LanguageSelectorC">

    <LanguageSelector />
  </div>
        <div className='divContainer'>
   
          <img 
            className='logo'
            src={ElSol}
            alt="Logo"    
          />
        </div>
        
        {/* Button to toggle the menu on smaller screens */}
        <button id='Menu' className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
        </button>
        <div className="line"></div>

        {/* Main menu */}
        <ul id='Menu' className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">TOPICS</a></li>
          <li><a href="#">RESOURCES</a></li>
          <li><a href="#">GAMES</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">FORUM</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#" id='loguinBottom' className="login-button">Log In</a></li>
          <li><a href="#" id='singupBottom' className="signup-button">Sign Up</a></li>
        </ul>
          
      </nav>
    </header>
  );
}

// Export the Header component as the default export
export default Header;
