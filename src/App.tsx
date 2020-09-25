import React from 'react';
import './App.css';
import Navbar from './Navbar'
import ActionBar from './ActionBar'

export default function App() {
  return (
    <div className="container-fluid pl-0 pr-0">
      <Navbar />
      <ActionBar />
    </div>
  );
}
