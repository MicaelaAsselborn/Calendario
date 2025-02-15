//GLOBAL VALUES
const date = new Date();
const day = date.getDay();
const numberDate = date.getDate();

//ARRAYS
const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agoto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

//QUERY SELECTOR
const monthText = document.querySelector("#month");
const yearText = document.querySelector("#year");
const dateText = document.querySelector("#current-date");
const currentMonthDate = document.querySelector("#days");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

//DATES
monthText.innerText = monthName[month];
yearText.innerText = year;
dateText.innerText = weekday[day] + " " + numberDate + " de " + monthName[month] + ", " + year

//DAYS FUNCTION
function renderCalendar(){
    let days = "";
    const day = date.getDay();
    const numberDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const nextDaysIndex = 7 - day - 1;
    const totalCells = (Math.ceil((day + lastDay)/7)*7)-1;

    //DATES
    monthText.innerText = monthName[month];
    yearText.innerText = year;
    dateText.innerText = weekday[day] + " " + numberDate + " de " + monthName[month] + ", " + year

    for (i = day; i > 0; i--){
        let prevDate = new Date( year, month, - i + 1)
        days += `<div 
        class="prev-days" 
        onclick="changeCellColor()" 
        data-day="${prevDate.getDate()}" 
        data-month="${prevDate.getMonth()}" 
        data-year="${prevDate.getFullYear()}" 
        data-weekday="${prevDate.getDay()}"
        >${prevMonthLastDay - i + 1}</div>`
    };  //CALCULATES PREV MONTH DAYS TO SHOW
    
    for (i = 1; i <= lastDay; i++){
        let currentDate = new Date(year, month, i)
        if (i === date.getDate() && month === new Date().getMonth()){
            days += `<div 
            class="today day" 
            onclick="changeCellColor()" 
            data-day="${currentDate.getDate()}" 
            data-month="${currentDate.getMonth()}" 
            data-year="${currentDate.getFullYear()}" 
            data-weekday="${currentDate.getDay()}"
            >${i}</div>`
        } else{
            days += `<div 
            onclick="changeCellColor()" 
            data-day="${currentDate.getDate()}" 
            data-month="${currentDate.getMonth()}" 
            data-year="${currentDate.getFullYear()}" 
            data-weekday="${currentDate.getDay()}"
            >${i}</div>`;
        }
    }   //CALCULATES CURRENT MONTH DAYS TO SHOW

    let nextDays = totalCells - (day + lastDay) + 1
    for (i = 1; i <= nextDays; i++){
        let nextDate = new Date(year, month + 1, i)
        days += `<div 
        class="next-days" 
        onclick="changeCellColor()" 
        data-day="${nextDate.getDate()}" 
        data-month="${nextDate.getMonth()}" 
        data-year="${nextDate.getFullYear()}" 
        data-weekday="${nextDate.getDay()}"
        >${i}</div>`
        currentMonthDate.innerHTML = days
    }   //CALCULATES NEXT MONTH DAYS TO SHOW
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
function changeCellColor(){
    let previouslySelected = document.querySelector(".selected");
    if (previouslySelected){
        previouslySelected.classList.remove("selected")
    }
    const clickedCell = event.target;
    clickedCell.classList.toggle("selected");

    let selectedDay = {
        day: clickedCell.getAttribute("data-day"),
        month: clickedCell.getAttribute("data-month"),
        year: clickedCell.getAttribute("data-year"),
        weekday: clickedCell.getAttribute("data-weekday")
    }
    console.log(selectedDay)
}

//INITIAL RENDER
renderCalendar();

