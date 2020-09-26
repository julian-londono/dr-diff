import React from 'react';
import './App.css';
import upload from './assets/upload.svg'

interface Props {
    screenTitle: string;
}

export default class ActionBar extends React.Component<Props> {
    render() {
        return <div className="container-fluid px-0 py-4 bg-light" >
            <div className="row">
                <div className="col-md-3 pl-5">
                    <p className="actionbar-role my-0">Designer</p>
                    <p className="actionbar-screen-title my-0">{this.props.screenTitle}</p>
                    <p className="actionbar-updated my-0">Last updated: </p>
                </div>
                <div className="col-md-3">
                    <img src={upload} width="18" height="24" className="d-flex mx-auto mt-3 align-middle" alt="Upload design button" />
                    <p className="actionbar-button-text text-center">Upload Design</p>
                </div>
                <div className="col-md-3">
                    <p className="actionbar-role my-0">Engineer</p>
                    <p className="actionbar-screen-title my-0">Invite Dev OR Title</p>
                    <p className="actionbar-updated my-0">Last updated: </p>
                </div>
                <div className="col-md-3">
                    <img src={upload} width="18" height="24" className="d-flex mx-auto mt-3 align-middle" alt="Upload screenshot button" />
                    <p className="actionbar-button-text text-center">Upload Screnshot</p>
                </div>
            </div>
        </div>
    };
}
