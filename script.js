
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

}

// TYPING EFFECT

const text = "BCA Student | Developer | Cyber Security Learner";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect,80);

    }

}

typingEffect();

// CLOCK

function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

// LOADER

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },2000);

});

// NOTES OPEN

function openNotes(subject){

    if(subject === "c"){

        window.open("https://www.w3schools.in/c-tutorial/");

    }

    else if(subject === "java"){

        window.open("https://www.w3schools.com/java/");

    }

    else if(subject === "python"){

        window.open("https://www.w3schools.com/python/");

    }

    else if(subject === "html"){

        window.open("https://www.w3schools.com/html/");

    }

}
