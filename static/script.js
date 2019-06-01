function removeDoor() {
    var door = document.getElementById("doors");
    door.removeChild(door.lastChild);
}

function addDoor() {
    var door = document.createElement("div");
    var doorNum = document.getElementById("doors").childNodes.length;
    document.getElementById("doors").appendChild(door);
    door.innerHTML = `
        <label>Destination</label>
        <input type='text' name=destination${doorNum}>
        <br>
        <label>Location</label>
        <input type='number' name=width${doorNum}>
        <input type='number' name=height${doorNum}>
        <br><br>`;
}