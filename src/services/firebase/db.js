import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { createUserWithEmailAndPassword, updateProfile,getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN9RJH_PWueALzUEgHIO7AMbHK4ZeuqTw",
  authDomain: "remui-f0000.firebaseapp.com",
  projectId: "remui-f0000",
  storageBucket: "remui-f0000.appspot.com",
  messagingSenderId: "229641248303",
  appId: "1:229641248303:web:e6238a9f6b948d9ef6f0da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)

async function register ({firstname,lastname,email,password}) {

    const resp = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

    await updateProfile(resp.user, {displayName: `${firstname} ${lastname}`});
}
async function login({email,password}){
    const resp = await signInWithEmailAndPassword(
        auth , email , password
    )
    return resp.user
}
async function logout(){
    await signOut(auth);
}
export const firebasedb = {
    register:register,
    login:login,
    logout:logout
}