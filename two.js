
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRqhljeuBNPr-egHME6W6T-VS_xiXyfBs",
  authDomain: "multipage-699ba.firebaseapp.com",
  projectId: "multipage-699ba",
  storageBucket: "multipage-699ba.appspot.com",
  messagingSenderId: "613934664880",
  appId: "1:613934664880:web:21a40f8079ef480e51ff75",
  measurementId: "G-YFMVNJNPN4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

*/



let getValue=localStorage.getItem("userName");

document.getElementById("head").innerHTML="Hello "+getValue;

let input1=document.getElementById("input1");
let buton=document.getElementById("buton");
let root=document.getElementById("root");
let backbtn=document.getElementById("backbtn");
buton.addEventListener("click",function(){
  
    buton.textContent="add again";
    


    let head=document.createElement("h1");
    head.textContent=input1.value;

    root.appendChild(head);
    input1.value="";
   

});

backbtn.addEventListener("click",function(){
  window.location="index.html";
});

/*
function addUser(){
  var userName=input1.value;
  firebase.database().ref("/").child(userName).update({
      purpose:"adding room name"
  });
  
*/