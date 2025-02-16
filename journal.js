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

let eventData = JSON.parse(localStorage.getItem("eventData")) || [];

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

            eventData.push(newEvent);

            localStorage.setItem("eventData", JSON.stringify(eventData));

            console.log("Evento guardado: ", newEvent)
            console.log("Lista de eventos: ", eventData)
        }
    }
} // SAVE EVENT DATA

const note = document.querySelector("textarea");
let noteData = JSON.parse(localStorage.getItem("noteData")) || [];

function saveNote(){
    const noteValue = note.value;
    const newNote = {
        note: noteValue,
    };

    noteData.push(newNote);
    localStorage.setItem("noteData", JSON.stringify(noteData));

    console.log("Note guardada: ", newNote);
    console.log("Lista de notas: ", noteData);
}
