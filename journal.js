//OPEN DIVS FUNCTIONS
function addEvent(){
    document.querySelector(".background").style.display = "block";
    document.querySelector("#event-creation").style.display = "block";
}
function addNote(){
    document.querySelector(".background").style.display = "block";
    document.querySelector("#note-creation").style.display = "block";
}

//CLOSE DIV FUNCTION
function closeDiv(){
    document.querySelector(".background").style.display = "none";
    document.querySelector("#event-creation").style.display = "none";
    document.querySelector("#note-creation").style.display = "none";
}

//OBTAIN INPUTS
const nameInput = document.querySelector("#event-name");
const startInput = document.querySelector("#event-init");
const endInput = document.querySelector("#event-end");

//SAVE INFO FUNCTIONS
let eventData = {};

const nameInputValue = nameInput.value;
const startInputValue = startInput.value;
const endInputValue = endInput.value;

function saveEvent(){
    if (nameInputValue && startInputValue && endInputValue){
        if (startInputValue > endInputValue){
            alert("¡La fecha de inicio no puede ser después que la fecha de finalización!")
        } else{
            eventData["name"] = nameInputValue;
            eventData["init"] = startInputValue;
            eventData["end"] = endInputValue;
        }
    }
}