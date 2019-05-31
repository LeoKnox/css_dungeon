function addDoor() {
    yeah();
}

function yeah() {
    var door = document.createElement("div");
    door.innerHTML = "<p>tag</p>";
    document.getElementById("doors").appendChild(door);
    alert('yeah');
}