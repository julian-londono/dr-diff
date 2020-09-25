import React, {useEffect, useState} from 'react';
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



function App() {

  const [title, setTitle] = useState("Default Title");
  const [devImgSrc, setDevImgSrc] = useState("");
  const [desImgSrc, setDesImgSrc] = useState("");
  const [approved, setApproved] = useState("");

  useEffect(() => {
    const unsubscribe_proj = db.collection("project").doc("7IlJZpwzum9kOYVETcjD")
      .onSnapshot((doc: firebase.firestore.DocumentSnapshot) => {
        const data = doc.data();
        const projectTitle = data?.["title"];
        setTitle(projectTitle);
      })

    const unsubscribe_screen = db.collection("screen").doc("gpNIuzUuV6vWwNvVRfjk")
      .onSnapshot((doc: firebase.firestore.DocumentSnapshot) => {
        const data = doc.data();
        const screenDevImgSrc : string = data?.["dev_img_src"];
        const screenDesImgSrc : string = data?.["des_img_src"];
        const screenApproved : string = data?.["approved"];
        setDevImgSrc(screenDevImgSrc);
        setDesImgSrc(screenDesImgSrc);
        setApproved(screenApproved);
      })

    return () => {
      unsubscribe_screen();
      unsubscribe_proj();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Project Title: {title}
        </div>
        <div>
          Developer Image:<br/>
          <img src = {devImgSrc}  alt= "Developer View"/>
        </div>
        <div>
          Designer Image:<br/>
          <img src = {desImgSrc}  alt= "Designer View"/>
        </div>
        <div>
          Approved? : {approved ? "Yes" : "No"}
        </div>
      </header>
    </div>
  );
}

export default App;
