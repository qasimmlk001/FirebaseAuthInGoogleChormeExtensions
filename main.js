let email=document.getElementById('email');
let password=document.getElementById('password');
let button=document.getElementById('submit');
let show=document.getElementById('discriber');


button.addEventListener('click',function(){
login();
});

function login(){
   e=email.value;
   p=password.value;
   firebase.auth().signInWithEmailAndPassword(e,p);
}
console.log("working");
firebase.auth().onAuthStateChanged((user)=>{
if(user){
    show.innerHTML="logged In";
}else{show.innerHTML="User is not defined";

}
});