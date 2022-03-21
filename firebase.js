// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//---------Replace This with your Own SDK-------->

const firebaseConfig = {
  apiKey: "AIzaSyBixpoqiEhTzA40Uh_Y1Uza7hfSjbRsaoc_YuklptIo0ksmama",
  authDomain: "auth3-94b31112.firebaseapp.com",
  projectId: "auth3332-94b31",
  storageBucket: "auth1-94b31.appspot.com",
  messagingSenderId: "7154250603666661",
  appId: "1:715425060361:web:7a39323321973296c295cccwecsa232112f798ad8"
};

// Initialize Firebase
try{
  firebase.initializeApp(firebaseConfig);
}
catch(e){
  console.log(e);
}