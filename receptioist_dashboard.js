

document.getElementById('tokenForm').addEventListener('submit', generateToken);

auth.onAuthStateChanged(user => {
    if (user) {
        loadTokens();
    } else {
        window.location.href = 'receptionist_login.html';
    }
});

function generateToken(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const problem = document.getElementById('problem').value;
    const token = 'T' + Date.now();

    db.collection('patients').add({
        name: name,
        age: age,
        email: email,
        problem: problem
    }).then(() => {
        alert('Token generated');
        document.getElementById('tokenForm').reset();
        loadTokens();
    });
}

function loadTokens() {
    const tokenList = document.getElementById('tokenList');
    tokenList.innerHTML = '';
    db.collection('patients').get().then(snapshot => {
        snapshot.forEach(doc => {
            const patient = doc.data();
            const tokenDiv = document.createElement('div');
            tokenDiv.innerHTML = `
                <p>${patient.name} - Token: ${patient.token}</p>
            `;
            tokenList.appendChild(tokenDiv);
        });
    });
}