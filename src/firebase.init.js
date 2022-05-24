import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi5T5bUjDCwkU5b7BZkdDy8aHv_Smc_mc",
  authDomain: "tool-manufacturer-a5283.firebaseapp.com",
  projectId: "tool-manufacturer-a5283",
  storageBucket: "tool-manufacturer-a5283.appspot.com",
  messagingSenderId: "562557461918",
  appId: "1:562557461918:web:2df6b19ffde6892d79e28f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


