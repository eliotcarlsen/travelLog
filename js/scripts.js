function place (name, landmarks, date){
  this.cityName = name;
  this.landmarks = landmarks;
  this.date = date;
};
// nameArray = ['Seattle', 'San Francisco', 'San Diego', 'Siurana'];
// landmarkArray = ["Space Needle", "Golden Gate Bridge", "The Beach", "Climbing"];
place.prototype.note = function(){
  return "We saw (the) " + this.landmarks + " in " + this.cityName + ".";
};

var placeSeattle = new place ("Seattle", "Space Needle", "2006");
var placeSanFrancisco = new place ("San Francisco", "Golden Gate Bridge", "2016");
var placeSanDiego = new place ("San Diego", "The Beach", "2009");
var placeSiurana = new place ("Siurana", "climbing", "2017");

console.log(placeSeattle.note());

$(document).ready(function(){
  $(".seattle").click(function(event){
    event.preventDefault();
    $("#seattle").append(placeSeattle.note());
    });
  $(".sanfrancisco").click(function(event){
    event.preventDefault();
    $("#sanfrancisco").append(placeSanFrancisco.note());
  });
  $(".sandiego").click(function(event){
    event.preventDefault();
    $("#sandiego").append(placeSanDiego.note());
  });
  $(".siurana").click(function(event){
    event.preventDefault();
    $("#siurana").append(placeSiurana.note());
  });


});
