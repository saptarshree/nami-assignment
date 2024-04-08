import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the profile icon
import '../index.css';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <h1 className="m-6  text-2xl font-bold ">ABCHotel</h1>
        <div className="relative m-6 right-16">
          
            <FontAwesomeIcon icon={faBell} className="text-gray-600" />
           
          <FontAwesomeIcon icon={faUser} className="ml-4 text-gray-600" /> {/* Profile icon */}
          </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
