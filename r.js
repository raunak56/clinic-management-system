var firebaseConfig = {
    apiKey: "AIzaSyB_qCUJxUugLO4kJkoTfoCpcMSkoAXGywo",
    authDomain: "prasad-clinic.firebaseapp.com",
    projectId: "prasad-clinic",
    storageBucket: "prasad-clinic.appspot.com",
    messagingSenderId: "117725975073",
    appId: "1:117725975073:web:b4b79391efa9b6d7fa0960",
    measurementId: "G-Q7XM2XCJYS"
    };


    firebase.initializeApp(firebaseConfig);
    var datbase = firebase.database()
    
    function save() {
        var email = document.getElementById('email').value
        var name = document.getElementById('name').value
        var problem  = document.getElementById('problem').value
        var age = document.getElementById('age').value
    
        databse.ref('users/'+username).set({
            email :email,
            name : name,
            problem : problem,
            age : age
        })
    
        alert('Data Saved')
    }
    function get(){
        var name= document.getElementById('username'.value)
        var user_ref = datbase.ref('users/'+ 'lll')
        user_ref.on('value',function(snampshot){
            var data = snapshot.val()

            alert(data.email)
        })
    }
    function update(){
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        var updates = {
            email : 'updated@emial.com'
        
        }
    }