function username()
{
    Username = document.getElementById("input1").value;
    localStorage.setItem("username",Username);
    window.location = "kwitter_room.html";
}