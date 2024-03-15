import React from 'react';
import './Frontpage.css'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <img src="https://pluspng.com/img-png/free-png-hd-birthday-birthday-party-png-clipart-picture-6410.png" alt="Logo" className="logo" /> {/* Adding the image */}
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
