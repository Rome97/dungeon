import React from 'react';
import './Contentsidebar.css'

const Sidebarcontent = () => {
  const items = [
    { label: 'Login', icon: 'fa-solid fa-user', link: '/login' },
    { label: 'Campaign', icon: 'fa-solid fa-bullhorn', link: '/campaign' },
    { label: 'Shop', icon: 'fa-solid fa-shopping-cart', link: '/shop' },
    { label: 'Character', icon: 'fa-solid fa-user-ninja', link: '/character' },
  ];

  return (
    <ul className="sidebar-list">
      {items.map((item) => (
        <li key={item.label} className="sidebar-item">
          <a href={item.link} className="sidebar-link">
            <i className={`fa ${item.icon}`}></i>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebarcontent;
