import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

export default function Navbar() {
    return (
        <div className="navbar navbar-light bg-white mb-1">
            <a className="navbar-brand" href="/home">
                <img src={logo} width="30" height="30" className="d-inline-block align-middle" alt="Dr.Diff Logo" />
                <p className="navbar-app-name d-inline-block align-middle pl-2 m-0">Dr. Diff</p>
            </a>
            <p className="navbar-username my-auto">Username</p>
        </div>
    );
}
