import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF-GE3uNZtQEDTtq3uClkIhffIQuvDSo0",
  authDomain: "project-authentication-dfd11.firebaseapp.com",
  projectId: "project-authentication-dfd11",
  storageBucket: "project-authentication-dfd11.appspot.com",
  messagingSenderId: "687227385798",
  appId: "1:687227385798:web:90f7e6ec8d2bd29dabe4c7"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app