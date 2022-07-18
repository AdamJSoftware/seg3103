import React from 'react';

import {Link} from "react-router-dom";
const Header = () => {
    return <div style={{
        display: "flex",
        
      }}>
    
      <Link style={{
          marginRight:"5px"
        }} to="/">Dashboard</Link>
      <Link 
style={{
          marginRight:"5px"
        }} 
       to="/about">About</Link>
      <Link 
style={{
          marginRight:"5px"
        }} 
      to="/login">Logout</Link>
    </div>
  }

export default Header;
