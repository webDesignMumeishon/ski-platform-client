import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Discussion from './components/Discussion';
import Posts from './components/Posts';


function App() {
  return (
    <div>
      <h1>This is App component </h1>
      <Outlet />
    </div>
  );
}

export default App;
