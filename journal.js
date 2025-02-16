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

//SAVE INFO FUNCTIONS
const nameInput = document.querySelector("#event-name");
const startInput = document.querySelector("#event-init");
const endInput = document.querySelector("#event-end");

let eventData = [];
let noteData = [];

function saveEvent(){

    const nameInputValue = nameInput.value;
    const startInputValue = startInput.value;
    const endInputValue = endInput.value;

    if (nameInputValue && startInputValue && endInputValue){
        if (startInputValue > endInputValue){
            alert("¡La fecha de inicio no puede ser después que la fecha de finalización!")
        } else{
            const newEvent =
            {
            name: nameInputValue,
            init: startInputValue,
            end: endInputValue,
            };

            let events = JSON.parse(localStorage.getItem("eventData")) || [];
            
            eventData.push(newEvent);

            localStorage.setItem("eventData", JSON.stringify(events));

            console.log("Evento guardado: ", newEvent.name)
            console.log(eventData)
        }
    }
}
