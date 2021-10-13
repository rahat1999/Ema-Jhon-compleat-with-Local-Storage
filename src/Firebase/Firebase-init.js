import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase-Config"
const initializeAuthentication = () => initializeApp(firebaseConfig);
export default initializeAuthentication;
