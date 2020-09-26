import React from 'react';
import './App.css';
import Navbar from './Navbar'
import ActionBar from './ActionBar'
import Communication from './Communication'
import './App.css';
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

interface Props {

}

interface State {
  title: string
}



export default class App extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      title: "Default Title"
    };
  }

  render() {
    return <div className="container-fluid px-0 h-100">
      <div className="row">
        <div className="col-md-12">
          <Navbar />
        </div>
      </div>
      <div className="row d-flex h-100">
        <div className="col-md-9">
          <ActionBar screenTitle={this.state.title} />
        </div>
        <div className="col-md-3">
          <Communication />
        </div>
      </div>
    </div>
  }
}
