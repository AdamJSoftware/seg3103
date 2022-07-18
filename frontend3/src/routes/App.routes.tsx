import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "../pages/About";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


export default () => {
  return (
   <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Dashboard />}/>

    </Routes>
  )
}
