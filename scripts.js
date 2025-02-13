//CONSTANTES
const date = new Date();
const day = date.getDay();
const numberDate = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

//ARRAYS
const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agoto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

//QUERY
const monthText = document.querySelector("#month")
const yearText = document.querySelector("#year")
const dateText = document.querySelector("#current-date")

//DATES
monthText.innerText = monthName[month];
yearText.innerText = year;
dateText.innerText = weekday[day] + " " + numberDate + " de " + monthName[month] + ", " + year

//DAYS
