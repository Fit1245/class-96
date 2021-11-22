const firebaseConfig = {
      apiKey: "AIzaSyAqf_Ui-nFXJWqCHBbhNwD3TaPTAr2uBw8",
      authDomain: "kwitter-7bfd2.firebaseapp.com",
      databaseURL: "https://kwitter-7bfd2-default-rtdb.firebaseio.com",
      projectId: "kwitter-7bfd2",
      storageBucket: "kwitter-7bfd2.appspot.com",
      messagingSenderId: "248908354063",
      appId: "1:248908354063:web:c871d58df0cb575e59097a"
    };
    
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
    store_username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + store_username;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function addRoom()
{
      room_name = document.getElementById("input2").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
      }

