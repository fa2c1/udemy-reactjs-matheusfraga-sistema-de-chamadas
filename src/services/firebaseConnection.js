import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


let firebaseConfig = {

    apiKey: "AIzaSyBhsf-SFsUJ4XGfrE0MD8uLDsF-sRcDsCo",  
    authDomain: "sistema-de-chamadas-ee2bd.firebaseapp.com",  
    projectId: "sistema-de-chamadas-ee2bd",  
    storageBucket: "sistema-de-chamadas-ee2bd.appspot.com",  
    messagingSenderId: "727380123521",  
    appId: "1:727380123521:web:4d0a25c80355b2261d1280",  
    measurementId: "G-XWQTJBZ5RT"
  
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
  