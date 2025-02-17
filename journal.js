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
const startDateInput = document.querySelector("#event-init");
const endDateInput = document.querySelector("#event-end");
const startTimeInput = document.querySelector("#time-init");
const endTimeInput = document.querySelector("#time-end");

let eventData = JSON.parse(localStorage.getItem("eventData")) || [];

function saveEvent(){

    const nameInputValue = nameInput.value;
    const startDateInputValue = startDateInput.value;
    const endDateInputValue = endDateInput.value;
    const startTimeInputValue = startTimeInput.value;
    const endTimeInputValue = endTimeInput.value;

    if (nameInputValue && startDateInputValue && endDateInputValue){
        if (startDateInputValue > endDateInputValue){
            alert("¡La fecha de inicio no puede ser después que la fecha de finalización!")
        } else{
            const newEvent =
            {
            name: nameInputValue,
            "date init": startDateInputValue,
            "date end": endDateInputValue,
            "time init": startTimeInputValue,
            "time end": endTimeInputValue,
            };

            eventData.push(newEvent);

            localStorage.setItem("eventData", JSON.stringify(eventData));

            console.log("Evento guardado: ", newEvent)
            console.log("Lista de eventos: ", eventData)

            addEventToCell()
        }
    }
} // SAVE EVENT DATA
console.log(eventData)
function addEventToCell(){

}

const noteDate = document.querySelector("#note-date")
const note = document.querySelector("textarea");
let noteData = JSON.parse(localStorage.getItem("noteData")) || [];

function saveNote(){
    const noteDateValue = noteDate.value;
    const noteValue = note.value;
    const newNote = {
        date: noteDateValue,
        note: noteValue,
    };

    noteData.push(newNote);
    localStorage.setItem("noteData", JSON.stringify(noteData));

    console.log("Note guardada: ", newNote);
    console.log("Lista de notas: ", noteData);
} //SAVE NOTE DATA