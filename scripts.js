//CONSTANTES
const date = new Date();

const day = date.getDay();
const numberDate = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const lastDay = new Date(year, month + 1, 0).getDate();
const prevMonthLastDay = new Date(year, month, 0).getDate();

console.log(prevMonthLastDay)

//ARRAYS
const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agoto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

//QUERY
const monthText = document.querySelector("#month");
const yearText = document.querySelector("#year");
const dateText = document.querySelector("#current-date");
const currentMonthDate = document.querySelector("#days")

//DATES
monthText.innerText = monthName[month];
yearText.innerText = year;
dateText.innerText = weekday[day] + " " + numberDate + " de " + monthName[month] + ", " + year

//FUNCTIONS
let days = ""

for (i = day + 1; i > 0; i--){
    days += `<div class="prev-days">${prevMonthLastDay - i}</div>`
};

for (i = 1; i <= lastDay; i++){
    days += `<div>${i}</div>`
    currentMonthDate.innerHTML = days
}   
