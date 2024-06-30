
auth.onAuthStateChanged(user => {
    if (user) {
        loadPatients();
    } else {
        window.location.href = 'doctor_login.html';
    }
});

function loadPatients() {
    db.collection('patients').get().then(snapshot => {
        const patientDetails = document.getElementById('patientDetails');
        snapshot.forEach(doc => {
            const patient = doc.data();
            const patientDiv = document.createElement('div');
            patientDiv.innerHTML = `
                <h3>${patient.name}</h3>
                <p>Age: ${patient.age}</p>
                <p>Email: ${patient.email}</p>
                <p>Token: ${patient.token}</p>
                <button onclick="prescribe('${doc.id}')">Prescribe</button>
            `;
            patientDetails.appendChild(patientDiv);
        });
    });
}

function prescribe(patientId) {
    const prescription = prompt('Enter prescription:');
    db.collection('patients').doc(patientId).update({
        prescription: prescription
    }).then(() => {
        alert('Prescription saved');
        location.reload();
    });
}