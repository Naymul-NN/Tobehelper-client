import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjTmCdTJCb9oa3cNI5rPpoS6a6AaCr5q0",
  authDomain: "tobehelper-auth.firebaseapp.com",
  projectId: "tobehelper-auth",
  storageBucket: "tobehelper-auth.appspot.com",
  messagingSenderId: "275813186032",
  appId: "1:275813186032:web:5cacfa9c93385b535a0535"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;