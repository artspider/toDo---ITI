var today = new Date();
var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octobre', 'Noviembre', 'Diciembre'];

let weekDay = days[today.getDay()]; //Día de la semana [Lunes, martes, ...]
let monthDay = today.getDate(); // Día del mes [1,2,3,4,..,30]
let month = today.getMonth(); // Mes
let monthName = months[month];
let year = today.getFullYear(); // Año

var fecha = document.getElementById('fecha'); // Obtiene el elemento H1 con ID = fecha
fecha.innerHTML = `${weekDay}, ${monthDay} ${monthName}`; // Agregamos código HTML a la variable fecha, se reflejará en el H1

var inputTarea = document.getElementById('inputTarea');
var btnAdd = document.getElementById('btnAdd');


btnAdd.addEventListener('click', function () { addElement('li', inputTarea.value) });

function addElement (lbl, text) {
  if (text === '') {
    return;
  }
  const htmlCode =  `<p class="work">${text}</p>` +
                    '<i class= "fa fa-check-circle fa-2x done"></i>' +
                    '<i class= "fa fa-trash fa-2x remove"></i>';
  const element = document.createElement(lbl);
  element.innerHTML = htmlCode;

  const lista = document.querySelector('.lista');
  lista.appendChild(element);
  inputTarea.value = '';
}