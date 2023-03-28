const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = [" De Enero Del", "De Febrero Del ", "De Marzo Del ", "De April Del ", "De Mayo Del ", "De Junio Del ",
    "De Julio Del ", "De Agosto Del ", "De Septiembre Del ", "De Octubre Del ", "De Noviembre Del ", "De Diciembre Del "
];



const interval = setInterval(() => {

    const local = new Date();
    
    let day = local.getDate(  ),
        month = local.getMonth(),
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;

}, 1000);