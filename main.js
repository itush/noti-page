import './style.css'

const readUn = document.getElementById("read-unread"), notif = document.querySelectorAll(".notif"), notifCount = document.getElementById("notif-counter"),
    rDot = document.querySelectorAll(".r-dot"), notif1 = document.getElementById("notif-1"), notif2 = document.getElementById("notif-2"), notif3 = document.getElementById("notif-3"), rdot1 = document.getElementById("rdot-1"), rdot2 = document.getElementById("rdot-2"), rdot3 = document.getElementById("rdot-3");

const readToggle = () => {
    for (var i = 0; i < notif.length; i++) {
        notif[i].style.backgroundColor = "white";
    }

    for (var x = 0; x < rDot.length; x++) {
        rDot[x].style.display = "none";
    }

    notifCount.innerText = "0";
}

var rn = 3;

const readNotif1 = () => {

    if (rn > 0) {
        rn--;
        notifCount.innerText = rn;
        rdot1.style.display = "none";
        notif1.style.backgroundColor = "White";
        notif1.removeEventListener("click", readNotif1);

    }
}

const readNotif2 = () => {

    if (rn > 0) {
        rn--;
        notifCount.innerText = rn;
        rdot2.style.display = "none";
        notif2.style.backgroundColor = "White";
        notif2.removeEventListener("click", readNotif2);

    }
}

const readNotif3 = () => {

    if (rn > 0) {
        rn--;
        notifCount.innerText = rn;
        rdot3.style.display = "none";
        notif3.style.backgroundColor = "White";
        notif3.removeEventListener("click", readNotif3);

    }
}


readUn.addEventListener("click", readToggle);
notif1.addEventListener("click", readNotif1);
notif2.addEventListener("click", readNotif2);
notif3.addEventListener("click", readNotif3);
