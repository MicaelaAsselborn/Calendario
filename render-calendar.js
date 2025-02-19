//GLOBAL DATE VALUES
const date = new Date(); // GETS TODAY'S DATE 
const day = date.getDay(); // GETS THE DAY OF THE WEEK
const numberDate = date.getDate(); // GETS THE DAY OF THE MONTH
const month = date.getMonth(); // GETS THE MONTH
const year = date.getFullYear(); // GETS THE YEAR

// MONTH'S SPANISH NAMES
const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agoto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// HTML QUERY SELECTORS
const monthText = document.querySelector("#month"); // GETS MONTH NAME AT THE TOP
const yearText = document.querySelector("#year"); // GETS YEAR NUMBER AT THE TOP
const dateText = document.querySelector("#current-date"); // GETS DATE TEXT IN THE JOURNAL
const currentMonthDate = document.querySelector("#days"); // GETS DAYS CONTAINER IN THE CALENDAR
const prevButton = document.querySelector(".prev"); // GETS PREVIOUS MONTH ARROW
const nextButton = document.querySelector(".next"); // GETS FOLLOWING MONTH ARROW

const dateFormat = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    }; // FORMAT OF THE DATE TEXT

// VISIBLES DATES
monthText.innerText = monthName[month]; // TRANSLATE MONTH'S NAME AT THE TOP TO SPANISH
yearText.innerText = year; // SHOWS CURRENT YEAR AT THE TOP
dateText.innerText = date.toLocaleDateString("es-ES", dateFormat); // SHOWS DATE IN SPANISH FORMAT IN THE JOURNAL

// FUNCTIONS TO CALCULATE HOW MUCH DAYS GIVE TO PREV, CURRENT AND NEXT MONTH AND RENDER THE CALENDAR
function renderCalendar(){
    let days = ""; // INITIALIZE DAYS CELLS
    const firstDayMonth = new Date (year, month, 1).getDay(); // GETS 1ST DAY OF THE MONTH'S INDEX
    const firstDayToMonday = firstDayMonth + 6; // PUSH WEEKDAYS INDEX 6 FORWARD
    const firstDayIndex = firstDayToMonday % 7; // GETS 1ST DAY OF THE MONTH INDEX (WEEKDAY) HAVING MONDAY AS 1ST DAY OF THE WEEK
    const lastDay = new Date(year, month + 1, 0).getDate(); // GETS LAST DAY OF CURRENT MONTH
    const prevMonthLastDay = new Date(year, month, 0).getDate(); // GETS LAST DAY OF PREVIOUS MONTH
    const howManyRows = (firstDayIndex + lastDay)/7; // CALCULATES HOW MANY ROWS ARE NEEDED FOR THE TOTAL DAYS OF THE CURRENT MONTH
    const rowsToInteger = Math.ceil(howManyRows); // MAKE THE AMOUNT OF ROWS A WHOLE NUMBER
    const totalCells = rowsToInteger * 7; // CALCULATES TOTAL AMOUNT OF CELLS NEEDED FOR THE  CALENDAR GRID

    for (let i = firstDayIndex; i > 0; i--){
        let prevDate = new Date(year, month - 1, prevMonthLastDay - (i - 1)); // CALCULATES HOW MANY DAYS OF THE PREVIOUS MONTH SHOW TO FILL THE ROW
        let prevMonthRowFirstDay = prevMonthLastDay - (i - 1); // CALCULATES 1ST DAY TO SHOW ON PREV MONTH CELLS
        days += `<div 
        class="prev-days" 
        onclick="changeCellColor(event)" 
        data-date="${prevDate.toDateString()}">
        ${prevMonthRowFirstDay}
    </div>`
    };
    
    for (let i = 1; i <= lastDay; i++){
        const isToday = i === date.getDate() && month === new Date().getMonth(); // CHECKS IF THE DAY CELL IS TODAY'S DATE
        let currentDate = new Date(year, month, i); // GETS CURRENT MONTH AMOUNT OF DAYS
        let className = ""; // INITIALIZE CLASSES TO ADD
        if (isToday){
            className +=" today"
        } 
        days += `<div 
            class="${className}" 
            onclick="changeCellColor(event)" 
            data-date="${currentDate.toDateString()}">
            ${i}
        </div>`;
        
    }   //CALCULATES CURRENT MONTH DAYS TO SHOW

    let nextDays = totalCells - (firstDayIndex + lastDay)
    for (let i = 1; i <= nextDays; i++){
        let nextDate = new Date(year, month + 1, i)
        days += `<div 
        class="next-days" 
        onclick="changeCellColor(event)" 
        data-date="${nextDate.toDateString()}">
        ${i}
    </div>`
    };   //CALCULATES NEXT MONTH DAYS TO SHOW
    currentMonthDate.innerHTML = days;
}

//PREV & NEXT FUNCTIONS
prevButton.addEventListener("click", ()=>{
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})
nextButton.addEventListener("click", ()=>{
        date.setMonth(date.getMonth() + 1)
        renderCalendar()
})

//SELECTED DAYS
function changeCellColor(event){
    let previouslySelected = document.querySelector(".selected");
    if (previouslySelected){
        previouslySelected.classList.remove("selected")
    }
    const clickedCell = event.target;
    clickedCell.classList.toggle("selected");

    const selectedDay = new Date(clickedCell.getAttribute("data-date"))

    dateText.innerText = selectedDay.toLocaleDateString("es-ES", dateFormat);
    }
    
//INITIAL RENDER
document.addEventListener("DOMContentLoaded", renderCalendar());