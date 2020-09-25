import React from 'react';
import './App.css';
import Navbar from './Navbar'
import ActionBar from './ActionBar'
import Communication from './Communication'

export default function App() {
  return (
    <div className="container-fluid px-0 h-100">
      <div className="row">
        <div className="col-md-12">
          <Navbar />
        </div>
      </div>
      <div className="row d-flex h-100">
        <div className="col-md-9">
          <ActionBar />
        </div>
        <div className="col-md-3">
          <Communication />
        </div>
      </div>
    </div>
  );
}
