import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticDate } from './GalacticDate';

$(document).ready(function () {
  $('#date-form').submit(function (event) {
    event.preventDefault();
    let monthInput = parseInt($('#month').val());
    let dayInput = parseInt($('#day').val());
    let yearInput = parseInt($('#year').val());
    let ageInput = parseInt($('#age').val());
    let planetInput = $('#planet').val();
    let dateInput = new GalacticDate(yearInput, monthInput, dayInput, ageInput, planetInput);
    dateInput.calculateGalacticAge();

    //let planets = ["Mercury", "Venus", "Mars", "Jupiter"];

    $("#solution").append("<li> The date " + (monthInput + 1) + "/" + dayInput + "/" + yearInput + " is a " + dateInput.getWeekday() + "! Your age on Earth is " + ageInput + " , and your age on " + planetInput + " is " + dateInput.planetAge + "</li>");

    $("#lifespan").click(function(){
      $("#yearsLeft").append("<div> Your remaining age on " + planetInput + " is " + dateInput.remainPlanetYears + "</div>");
      

    });


  });
});