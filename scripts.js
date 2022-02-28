// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", ()=>{
    let takeOff = document.querySelector("#takeoff");
    let land = document.querySelector("#landing");
    let abort = document.querySelector("#missionAbort");

    takeOff.addEventListener("click", takeOffLink);
    land.addEventListener("click", landing);
    abort.addEventListener("click", missionAbort);

    let rocket = document.querySelector("img");
    let up = document.querySelector("#up");
    let down = document.querySelector("#down");
    let left = document.querySelector("#left");
    let right = document.querySelector("#right");
    
    up.addEventListener("click", moveUp);
    down.addEventListener("click", moveDown);
    left.addEventListener("click", moveLeft);
    right.addEventListener("click", moveRight);



    function moveLeft() {
        let oldPos = rocket.style.left;
        let newPos = (parseInt(oldPos) + 10);

        if (newPos > 150) {
            rocket.style.left = oldPos;
        } else {
            rocket.style.left = newPos  + "px";
        } 
    }

    function moveRight() {
        let oldPos = rocket.style.left;
        let newPos = (parseInt(oldPos) - 10);

        if (newPos < -150) {
            rocket.style.left = oldPos;
        } else {
            rocket.style.left = newPos  + "px";
        } 
    }

    function moveUp() {
        let oldPos = rocket.offsetTop;;
        let newPos =  (oldPos - 10);

        if (newPos < 0) {
            rocket.style.top = oldPos;
        } else {
            rocket.style.top = newPos  + "px";
            let currentHeight = document.querySelector("#spaceShuttleHeight").innerHTML
            document.querySelector("#spaceShuttleHeight").innerHTML = parseInt(currentHeight) + 10000
        }

        if (newPos < 250) {
            document.querySelector("#flightStatus").innerHTML = "Shuttle in flight.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "blue";
        }
    }

    function moveDown() {
        let oldPos = rocket.offsetTop;
        let newPos =  (oldPos + 10);
        if (newPos === 250) {
            document.querySelector("#flightStatus").innerHTML = "The shuttle has landed.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "green";
        } 

        if (newPos > 250) {
            rocket.style.top = oldPos;
        } else {
            rocket.style.top = newPos  + "px";
            let currentHeight = document.querySelector("#spaceShuttleHeight").innerHTML
            document.querySelector("#spaceShuttleHeight").innerHTML = parseInt(currentHeight) - 10000;
        }
    }



    function takeOffLink() {
        let ready = confirm("Confirm that the shuttle is ready for takeoff.");

        if (ready) {
            document.querySelector("#flightStatus").innerHTML = "Shuttle in flight.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "blue";

            let currentHeight = document.querySelector("#spaceShuttleHeight").innerHTML
            document.querySelector("#spaceShuttleHeight").innerHTML = parseInt(currentHeight) + 10000;

            rocket.style.top = 250 - 10 + "px";
        }
    }

    function landing() {
        alert("The shuttle is landing. Landing gear engaged.");
        document.querySelector("#flightStatus").innerHTML = "The shuttle has landed.";
        document.querySelector("#shuttleBackground").style.backgroundColor = "green";
        document.querySelector("#spaceShuttleHeight").innerHTML = 0;

        rocket.style.top = 250 + "px";
        rocket.style.left = 0 + "px";
    }

    function missionAbort() {
        let abort = confirm("Confirm that you want to abort the mission.");
        if (abort) {
            document.querySelector("#flightStatus").innerHTML = "Mission aborted.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "green";
            document.querySelector("#spaceShuttleHeight").innerHTML = 0;

            rocket.style.top = 250 + "px";
            rocket.style.left = 0 + "px";
        }
    }
})