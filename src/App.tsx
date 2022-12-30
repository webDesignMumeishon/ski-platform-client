import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Discussion from './components/Discussion';
import Posts from './components/Posts';
import { NavigateBefore } from '@mui/icons-material';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
        <Navbar/>
        <Outlet />
    </div>
  );
}

export default App;
