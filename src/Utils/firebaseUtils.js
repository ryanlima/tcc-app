import firebaseApp from "firebase/app";
import "firebase/database";


const config = {

}
export const firebaseImpl = firebaseApp.initializeApp(config)
export const firebaseDatabase = firebaseApp.database()