import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUP_yonaUR-dB4PP1LwFWC_QTA1WhYaJ0",
  authDomain: "proyecto-react-30476.firebaseapp.com",
  projectId: "proyecto-react-30476",
  storageBucket: "proyecto-react-30476.appspot.com",
  messagingSenderId: "148918498484",
  appId: "1:148918498484:web:f4535c21d8f3f3634793e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
