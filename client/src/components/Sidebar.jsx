import React from 'react';
import './Navbarcustom.css';
import Sidebarcontent from './Contentsidebar';


const Sidebar = ({ isActive, onClose}) => {
  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <button onClick={onClose} className="close-button">
      <img src="/close.png" alt="Close sidebar" className="w-6 h-6 rounded-full hover:opacity-80" />

       
      </button>
      {!isActive ? null : <Sidebarcontent></Sidebarcontent>}
    </div>
  );
};

export default Sidebar;
