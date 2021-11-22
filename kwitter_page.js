const firebaseConfig = {
      apiKey: "AIzaSyAqf_Ui-nFXJWqCHBbhNwD3TaPTAr2uBw8",
      authDomain: "kwitter-7bfd2.firebaseapp.com",
      databaseURL: "https://kwitter-7bfd2-default-rtdb.firebaseio.com",
      projectId: "kwitter-7bfd2",
      storageBucket: "kwitter-7bfd2.appspot.com",
      messagingSenderId: "248908354063",
      appId: "1:248908354063:web:c871d58df0cb575e59097a"
    };

    firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("username");
   room_name = localStorage.getItem("room_name");
   


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push ({
        name:user_name,
       message:msg,
       like:0
  });
  document.getElementById("msg").value = "";

}
//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


