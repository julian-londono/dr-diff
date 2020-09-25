import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Navbar from './Navbar'

export default function App() {
  return (
    <div className="container-fluid pl-0 pr-0">
      <Navbar />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
