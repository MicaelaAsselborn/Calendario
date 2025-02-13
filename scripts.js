//CONSTANTES
const date = new Date();

const day = date.getDay();
const numberDate = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const lastDay = new Date(year, month + 1, 0).getDate();
const prevMonthLastDay = new Date(year, month, 0).getDate();
const nextDaysIndex = 7 - day - 1;

//ARRAYS
const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agoto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

//QUERY SELECTOR
const monthText = document.querySelector("#month");
const yearText = document.querySelector("#year");
const dateText = document.querySelector("#current-date");
const currentMonthDate = document.querySelector("#days")

//DATES
monthText.innerText = monthName[month];
yearText.innerText = year;
dateText.innerText = weekday[day] + " " + numberDate + " de " + monthName[month] + ", " + year

//FUNCTIONS
let days = "";

for (i = day + 1; i > 0; i--){
    days += `<div class="prev-days">${prevMonthLastDay - i + 1}</div>`
};  //CALCULATES PREV MONTH DAYS TO SHOW

for (i = 1; i <= lastDay; i++){
    if (i === date.getDate()){
        days += `<div class="today">${i}</div>`
    } else{
    days += `<div>${i}</div>`;
    }
}   //CALCULATES CURRENT MONTH DAYS TO SHOW

for (i = 1; i <= nextDaysIndex; i++){
    days += `<div class="next-days">${i}</div>`
    currentMonthDate.innerHTML = days
}   //CALCULATES NEXT MONTH DAYS TO SHOW