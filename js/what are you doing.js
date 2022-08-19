// Datepicker widget
$(function () {
  $('#dialog').dialog();
});

$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
    });
  });


$( function() {
  $( ".widget input[type=submit], .widget a, .widget button" ).button();
  $( "button, input, a" ).on( "click", function( event ) {
    vent.preventDefault();
  } );
} );

//js for form
const addTask = (event)=>{
  event.preventDefault();
  let task = {
    id: datePicker.now(),
    date: document.getElementById('datepicker').value,
    time: document.getElementById('duetime').value,
    description: document.getElementById('descriptionschedule').value,
    amorpm: document.getElementById('am-or-pm').value,
    status: document.getElementById('status').value
  }
  tasks.push(task);
  document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('daily-button').addEventListener('click', addTask);
});