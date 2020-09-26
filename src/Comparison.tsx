import React from 'react';
import './App.css';

interface Props {
    design_src: string,
    dev_src: string
}

export default class Comparison extends React.Component<Props> {

    render() {
        return <div className="container-fluid bg-transparent" >
            <div className="row h-100">
                <div className="col-md-6 p-5 comparison-border">
                    <img src={this.props.design_src} className="d-block w-100 h-50 comparison-img" alt="Designer rendering" />
                </div>
                <div className="col-md-6 p-5">
                    <img src={this.props.dev_src} className="d-block w-100 h-50 comparison-img " alt="Developer rendering" />
                </div>
            </div>
        </div>
    };
}
