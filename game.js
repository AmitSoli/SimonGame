var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern)
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log(1)
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
