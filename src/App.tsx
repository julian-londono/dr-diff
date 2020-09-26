import React from 'react';
import './App.css';
import Navbar from './Navbar'
import ActionBar from './ActionBar'
import Communication from './Communication'
import Comparison from './Comparison'
import './App.css';
import design_example from './assets/design_example.png'
import dev_example from './assets/dev_example.png'
import firebase from "firebase";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebaseApp = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/firestore");

firebaseApp.initializeApp({
  apiKey: "AIzaSyD1YnZpP3RkU8eLPnVV7Chf2oTjaj5eWQI",
  authDomain: "dr-diff.firebaseapp.com",
  databaseURL: "https://dr-diff.firebaseio.com",
  projectId: "dr-diff",
  storageBucket: "dr-diff.appspot.com",
  messagingSenderId: "193522728998",
  appId: "1:193522728998:web:0a0cfd8171d6a04f6fa6e7"
});

const db = firebaseApp.firestore();


// const [title, setTitle] = useState("Default Title");
// const [devImgSrc, setDevImgSrc] = useState("");
// const [desImgSrc, setDesImgSrc] = useState("");
// const [approved, setApproved] = useState("");

export interface Comment {
  id?: number,
  time_posted?: string,
  user: string,
  body: string
}

interface Props {

}

interface State {
  screenTitleDesign: string,
  screenTitleDev: string,
  comments: Comment[],
  design_src: string,
  dev_src: string
}



export default class App extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      screenTitleDesign: "Default Title",
      screenTitleDev: "Default Title",
      comments: [
        {
          user: "Engineer 1", body: "Is there a reason we are trying to do in this screen?!"
        },
        {
          user: "Designer 1", body: "We are trying to make sure the user can see all the info on one screen"
        }
      ],
      design_src: design_example,
      dev_src: dev_example
    };
  }

  render() {
    return <div className="container-fluid px-0 h-100">
      <div className="row">
        <div className="col-md-12">
          <Navbar />
        </div>
      </div>
      <div className="row h-100">
        <div className="col-md-9 d-flex flex-column">
          <div className="row pr-1 div-shadow">
            <ActionBar screenTitleDesign={this.state.screenTitleDesign} screenTitleDev={this.state.screenTitleDev} />
          </div>
          <div className="row pr-1 flex-grow-1">
            <Comparison design_src={this.state.design_src} dev_src={this.state.dev_src} />

          </div>
        </div>
        <div className="col-md-3 px-0 div-shadow">
          <Communication comments={this.state.comments} />
        </div>
      </div>
    </div>
  }
}
