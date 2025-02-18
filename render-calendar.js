//GLOBAL VALUES
const date = new Date();
const day = date.getDay();
const numberDate = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

//ARRAYS
const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agoto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

//QUERY SELECTOR
const monthText = document.querySelector("#month");
const yearText = document.querySelector("#year");
const dateText = document.querySelector("#current-date");
const currentMonthDate = document.querySelector("#days");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

//DATES
const dateFormat = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    }
monthText.innerText = monthName[month];
yearText.innerText = year;

//DAYS FUNCTION
function renderCalendar(){
    let days = "";
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDayIndex = (new Date(year, month, 1 ).getDay() + 6) % 7 ;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const totalCells = (Math.ceil((firstDayIndex + lastDay)/7)*7);

    //DATES
    monthText.innerText = monthName[month];
    yearText.innerText = year;
    dateText.innerText = date.toLocaleDateString("es-ES", dateFormat);

    for (let i = firstDayIndex; i > 0; i--){
        let prevDate = new Date(year, month - 1, prevMonthLastDay - (i - 1));
        days += `<div 
        class="prev-days" 
        onclick="changeCellColor(event)" 
        data-date="${prevDate.toDateString()}">
        ${prevMonthLastDay - (i - 1)}
    </div>`
    };  //CALCULATES PREV MONTH DAYS TO SHOW
    
    for (let i = 1; i <= lastDay; i++){
        const isToday = i === date.getDate() && month === new Date().getMonth()
        let currentDate = new Date(year, month, i)
        let className = "";
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