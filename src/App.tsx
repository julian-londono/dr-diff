import React, { useEffect, useState } from 'react';
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

export const db = firebaseApp.firestore();

export interface Comment {
  id?: number,
  time_posted?: string,
  user_id: string,
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



export default function App() {


  const [screenTitleDesign, setScreenTitleDesign] = useState("Default Title");
  const [screenTitleDev, setScreenTitleDev] = useState("Default Title");
  const [designImgSrc, setDesignImgSrc] = useState(design_example);
  const [devImgSrc, setDevImgSrc] = useState(dev_example);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe_proj = db.collection("project").doc("7IlJZpwzum9kOYVETcjD")
      .onSnapshot((doc: firebase.firestore.DocumentSnapshot) => {
        const data = doc.data();
        const projectTitle = data?.["title"];
        setScreenTitleDesign(projectTitle);
        setScreenTitleDev(projectTitle);
      });

    const unsubscribe_comments = db.collection("comments")
      .onSnapshot((snap: any) => {
        setComments(snap.docs.map((doc: any) => doc.data()));
      });


    return () => {
      unsubscribe_proj();
      unsubscribe_comments();
    }
  }, []);

  return (
    <div className="container-fluid px-0 h-100">
      < div className="row" >
        <div className="col-md-12">
          <Navbar />
        </div>
      </div >
      <div className="row h-100">
        <div className="col-md-9 d-flex flex-column">
          <div className="row pr-1 div-shadow">
            <ActionBar screenTitleDesign={screenTitleDesign} screenTitleDev={screenTitleDev} />
          </div>
          <div className="row pr-1 flex-grow-1">
            <Comparison design_src={designImgSrc} dev_src={devImgSrc} />

          </div>
        </div>
        <div className="col-md-3 px-0 div-shadow">
          <Communication comments={comments} />
        </div>
      </div>
    </div >
  );
}
