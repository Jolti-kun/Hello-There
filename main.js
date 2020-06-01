var firebaseConfig = {
    apiKey: "AIzaSyBYmLfTLICgIgUxJeJ231z9tFV1WPP6ipo",
    authDomain: "hellothere-412bc.firebaseapp.com",
    databaseURL: "https://hellothere-412bc.firebaseio.com",
    projectId: "hellothere-412bc",
    storageBucket: "hellothere-412bc.appspot.com",
    messagingSenderId: "322448177284",
    appId: "1:322448177284:web:2b55ff7bdee991157cead1",
    measurementId: "G-DH0CQG2NS7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function SubmitMessage(){
    var text = document.getElementById("input").value
    console.log(text)
    if(text.length > 0){
        AddMessage(text)
    }
}

function UpdateDisplay(){
    document.getElementById("display").innerHTML = document.getElementById("input").value
}

function AddMessage(message){
    var database = firebase.database().ref();
    database.once('value').then(function(snapshot) {
        var data = snapshot.val()
        if(!data){
            data = {}
        }
        if(!data.quotes){
            data.quotes = []
        }
        data.quotes.push(message)
        database.update(data)
    })
}

