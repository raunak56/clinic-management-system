// firebase.js
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Get references to the HTML elements
const patientForm = document.getElementById('patientForm');
const patientList = document.getElementById('patientList');

// Add patient details to Firestore on form submit
patientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const symptoms = document.getElementById('symptoms').value;

    db.collection('patients').add({
        name: name,
        age: age,
        symptoms: symptoms,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert('Patient added successfully!');
        patientForm.reset();
    })
    .catch((error) => {
        console.error('Error adding patient: ', error);
    });
});

// Retrieve and display patient details on doctor's dashboard
db.collection('patients').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
    patientList.innerHTML = '';
    snapshot.forEach((doc) => {
        const patient = doc.data();
        const li = document.createElement('li');
        li.textContent = `Name: ${patient.name}, Age: ${patient.age}, Symptoms: ${patient.symptoms}`;
        patientList.appendChild(li);
    });
});