import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getDatabase,ref,set,get} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-datbase.js";

const firebaseConfig = {
  apiKey: "AIzaSyCe2GpfB2Ek9qE1qeWG51JE-MFt98GuLzk",
  authDomain: "clinic-51377.firebaseapp.com",
  databaseURL: "https://clinic-51377-default-rtdb.firebaseio.com",
  projectId: "clinic-51377",
  storageBucket: "clinic-51377.appspot.com",
  messagingSenderId: "971898388096",
  appId: "1:971898388096:web:0571014296abcd346e3065"
};
// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
function writeUserData(name,age,email){
    set(ref('users/'+ name),{
   
        age:age,
        email:email,
    })
}
writeUserData(raunak,"8","nitu56@gmail.com")
console.log(app);