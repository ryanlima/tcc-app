import firebaseApp from "firebase/app";
import "firebase/database";


const config = {
  apiKey: "AIzaSyCfo84ei_WwIGTWkX5VH4Le8KfEQZ2qunQ",
  authDomain: "react-firebase-a77b2.firebaseapp.com",
  databaseURL: "https://react-firebase-a77b2.firebaseio.com",
  projectId: "react-firebase-a77b2",
  storageBucket: "react-firebase-a77b2.appspot.com",
  messagingSenderId: "887283175925",
  appId: "1:887283175925:web:3c8e801d920ca6940250bc"
}
export const firebaseImpl = firebaseApp.initializeApp(config)
export const firebaseDatabase = firebaseApp.database()