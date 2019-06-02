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

function update() {
    var x = 600;
    var y = 600;
    var roomLeft =document.getElementsByClassName("box__face--left");
    var roomRight = document.getElementsByClassName("box__face--right");
    var roomFloor = document.getElementsByClassName("box__face--floor");
    var roomBack = document.getElementsByClassName("box__face--back");
    //roomWidth[0].style.transform = "translateZ(150px)";
    roomFloor[0].style.width = y;
    roomFloor[0].style.height = x;
    roomFloor[0].style.transform = `translateZ(${y/2-x/2}px) rotateX(-90deg)`
    roomBack[0].style.width = y;
    roomBack[0].style.transform = `translateZ(${-y/2}px)`;
    roomRight[0].style.width = x;
    roomRight[0].style.transform = `translateZ(${y-x}px) translateX(${y/2+50}px) rotateY(90deg)`;
    roomLeft[0].style.width = y;
    roomLeft[0].style.transform =`translateZ(${y-x}px) translateX(${-y/2+50}px) rotateY(-90deg)`;
}