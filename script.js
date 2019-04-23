/* --------------------------
 * Variables globales
 * -------------------------- */
// La fecha por llegar
var targetDate = new Date("2019/04/24 00:00:00");   

// Variables para la fecha formato UNIX
var days;
var hrs;
var min;
var sec;

/**
 * A cargar el documento
 * @param  {[type]}
 * @return {[type]}
 */
$(function() {
  // Calcular hasta la fecha dada
  timeToLaunch();

  // Transición hasta el 0 
  numberTransition('#days .number', days, 1000, 'easeOutQuad');
  numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
  numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
  numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
  
  // Cuenta regresiva
  setTimeout(countDownTimer,1001);
});

/**
 * Convierte las variables globales a tiempo real para el conteo
 * @return {[type]} [description]
 */
function timeToLaunch(){
  // Fecha actual
  var currentDate = new Date();

  // Encuentra la diferencia entre ambas fechas
  var diff = (currentDate - targetDate)/1000;
  var diff = Math.abs(Math.floor(diff));  

  // Encuentra el número de días
  days = Math.floor(diff/(24*60*60));
  sec = diff - days * 24*60*60;

  // Encuentra el número de horas
  hrs = Math.floor(sec/(60*60));
  sec = sec - hrs * 60*60;

  // Encuentra el número de minutos y segundos
  min = Math.floor(sec/(60));
  sec = sec - min * 60;
}

/**
 * Añade las variables a cada elemento a través del DOM
 * @return {[type]} [description]
 */
function countDownTimer(){ 
    
  // Añade el tiempo en la función anterior
  timeToLaunch();
    
  // Añadiendo a cada ID con la clase "number"
  $( "#days .number" ).text(days);
  $( "#hours .number" ).text(hrs);
  $( "#minutes .number" ).text(min);
  $( "#seconds .number" ).text(sec);
    
  // Repite el mismo proceso cada segundo
  setTimeout(countDownTimer,1000);
}

/**
 * Hace la transición a la fecha añadida
 * @param  {[type]} id                 [description]
 * @param  {[type]} endPoint           [description]
 * @param  {[type]} transitionDuration [description]
 * @param  {[type]} transitionEase     [description]
 * @return {[type]}                    [description]
 */
function numberTransition(id, endPoint, transitionDuration, transitionEase){
  // Transición de números de 0 a la fecha añadida
  $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
      duration: transitionDuration,
      easing:transitionEase,
      step: function() {
        $(id).text(Math.floor(this.numberCount));
      },
      complete: function() {
        $(id).text(this.numberCount);
      }
   }); 
};
