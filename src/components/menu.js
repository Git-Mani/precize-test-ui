
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
       
        <li><Link to="/insert">Insert</Link></li>
        <li><Link to="/view">View</Link></li>
        <li><Link to="/rank">Rank</Link></li>
        <li><Link to="/update">Update</Link></li>
        <li><Link to="/delete">Delete</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
