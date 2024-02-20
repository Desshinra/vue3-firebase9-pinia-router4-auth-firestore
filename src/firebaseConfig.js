import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAQ6IasxrEljTZ86Xi6Ccejm3zeJ5klBWA",
  authDomain: "vue-3-2024-3fd25.firebaseapp.com",
  projectId: "vue-3-2024-3fd25",
  storageBucket: "vue-3-2024-3fd25.appspot.com",
  messagingSenderId: "308672071339",
  appId: "1:308672071339:web:431c60747d29cf253f99ee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };