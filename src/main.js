import { Galactic } from './galactic.js';
import $ from 'jquery';

$(document).ready(function() {
  $("form#dayDate").submit(function(event) {
    event.preventDefault();
    let birthday = $("form#dayDate").val().toString();
    let dateSolver = new Galactic(birthday);
    let results = dateSolver.dayFinder(birthday);
    $("#result").text(results).show();
  });
});
