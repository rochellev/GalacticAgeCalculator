import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticDate } from './GalacticDate';

$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    let monthInput = parseInt($('#month').val());
    let dayInput = parseInt($('#day').val());
    let yearInput = parseInt($('#year').val());
    let dateInput = new GalacticDate(yearInput, monthInput, dayInput);


    $("#solution").append("<li> The date " + (monthInput+1) + "/" + dayInput + "/" + yearInput + " is a " + dateInput.getWeekday() + "! </li>");


  });
});