import firebase         from "firebase";
import {firebaseConfig} from "../config/firebase";


export const initializeFirebase = () => {
  return firebase.initializeApp(firebaseConfig);
};
