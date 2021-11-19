
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5jjvYq6RiicTBDUESY3HDXWQqX8sv9d8",
    authDomain: "kwitter-22027.firebaseapp.com",
    databaseURL: "https://kwitter-22027-default-rtdb.firebaseio.com",
    projectId: "kwitter-22027",
    storageBucket: "kwitter-22027.appspot.com",
    messagingSenderId: "512808055030",
    appId: "1:512808055030:web:399997cdb28488ccc43cd7",
    measurementId: "G-7P6HFREZ23"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
function addUser( )
{
    user_name = document.getElementById("user_name").value;
    firebase.database( ) . ref ("/").child(user_name).update({
        purpose : "adding user"
    });
}