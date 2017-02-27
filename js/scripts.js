function place (name, landmarks, date){
  this.cityName = name;
  this.landmarks = landmarks;
  this.date = date;
};
// nameArray = ['Seattle', 'San Francisco', 'San Diego', 'Siurana'];
// landmarkArray = ["Space Needle", "Golden Gate Bridge", "The Beach", "Climbing"];

var placeSeattle = new place ("Seattle", "Space Needle", "2006");
var placeSanFrancisco = new place ("San Francisco", "Golden Gate Bridge", "2016");
var placeSanDiego = new place ("San Diego", "The Beach", "2009");
var placeSiurana = new place ("Siurana", "climbing", "2017")


$(document).ready(function(){
  $(".seattle").click(function(event){
    event.preventDefault();
    $("#seattle").append("We saw the " + placeSeattle.landmarks + " in " + placeSeattle.cityName + ".");
    });
  $(".sanfrancisco").click(function(event){
    event.preventDefault();
    $("#sanfrancisco").append("We saw the " + placeSanFrancisco.landmarks + " in " + placeSanFrancisco.cityName + ".");
  });
  $(".sandiego").click(function(event){
    event.preventDefault();
    $("#sandiego").append("We saw " + placeSanDiego.landmarks + " in " + placeSanDiego.cityName + ".");
  });
  $(".siurana").click(function(event){
    event.preventDefault();
    $("#siurana").append("We went " + placeSiurana.landmarks + " in " + placeSiurana.cityName + ".");
  });


});
