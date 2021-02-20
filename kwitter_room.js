
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAzYEP6xseppOTt6lCwchIbjeNGznZobU0",
  authDomain: "kwitter-fe895.firebaseapp.com",
  databaseURL: "https://kwitter-fe895-default-rtdb.firebaseio.com/",
  projectId: "kwitter-fe895",
  storageBucket: "kwitter-fe895.appspot.com",
  messagingSenderId: "1073902116948",
  appId: "1:1073902116948:web:8f7e72f546925f8ba0cdc1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
