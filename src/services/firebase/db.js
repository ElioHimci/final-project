import { initializeApp } from "firebase/app";

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

async function register ({firstname,lastname,email,password}) {

}
async function login({email,password}){

}
async function logout(){
 console.log(app.options);
}
export const firebasedb = {
    register:register,
    login:login,
    logout:logout
}