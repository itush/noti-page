import './style.css'

const readUn = document.getElementById("read-unread"), notif = document.querySelectorAll(".notif"), notifCount = document.getElementById("notif-counter"), 
rDot = document.querySelectorAll(".r-dot") ;

const readToggle = () => {
    for (var i = 0; i < notif.length; i++) {
        notif[i].style.backgroundColor = "white";       
    }

    for (var x = 0; x < rDot.length; x++) {
        rDot[x].style.display = "none";
    }

    notifCount.innerText = "0";
}

readUn.addEventListener("click", readToggle);
