

document.getElementById('receptionistLoginForm').addEventListener('submit', login);

function login(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            window.location.href = 'receptionist_dashboard.html';
        })
        .catch(error => {
            console.error('Error signing in: ', error);
        });
}

