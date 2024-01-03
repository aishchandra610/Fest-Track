// Import the functions you need from the SDKs you need
let p = 6;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {


    apiKey: "AIzaSyDomBBg_pXemi1kZXr1qKRVunAYzh7yQvc",
    authDomain: "eventbeep-7cc04.firebaseapp.com",
    databaseURL: "https://eventbeep-7cc04-default-rtdb.firebaseio.com",
    projectId: "eventbeep-7cc04",
    storageBucket: "eventbeep-7cc04.appspot.com",
    messagingSenderId: "602245976409",
    appId: "1:602245976409:web:2fdb01b3072d9dc2f0fc48",
    measurementId: "G-L8Q0QGZKT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signup.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var course = document.getElementById('course').value;
    var year = document.getElementById('year').value;
    var fullname = document.getElementById('fullname').value;
    var username = document.getElementById('username').value;

    if (email.endsWith("@gla.ac.in")) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;

                set(ref(database, 'users/' + user.uid), {
                    username: username,
                    email: email,
                    fullname: fullname,
                    course: course,
                    year: year,
                })
                function myfun() {
                    document.getElementById("fullname").value = null;
                    document.getElementById("username").value = null;
                    document.getElementById("email").value = null;
                    document.getElementById("password").value = null;
                    document.getElementById("year").value = null;
                    document.getElementById("course").value = null;
                }
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        // ...

                    });


                alert('an email has been send in your gmail account');


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });

    }
    else {
        alert("Enter GLA email id");
    }
    let em = document.getElementById("username");
    em.value = ""
    em = document.getElementById("fullname");
    em.value = ""
    em = document.getElementById("course");
    em.value = ""
    em = document.getElementById("email");
    em.value = ""
    em = document.getElementById("password");
    em.value = ""
    em = document.getElementById("year");
    em.value = ""
})

hi.addEventListener('click', (e) => {
    console.log("hii");

})

