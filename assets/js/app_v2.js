// JavaScript Document
//game start
function hideGame(){
    $("#startScreen").show();
    //$("#gameView").hide();
    //$("#results").hide();
    console.log("hide game is working");
}
hideGame();
function gameStart(){
    $("#startScreen a").on("click", function(){
        $("#startScreen").hide();
        $("#gameView").show();
        $("#results").hide();
        console.log("Button Click is working");
      });
}
var gameArray = [{
  question: "What year did Chris Farley first appear on SNL?",
  answers: ["1988", "1989", "1990", "1991"],
  a: "1990",
},{
  question: "In Mike Myer's 'Sprockets' Skit, Deter always ended the show with:",
  answers: ["petting the monkey", "singing", "dancing", "fading to black"],
  a: "dancing",
},{
  question: "In Chevy Chase's Weekend News Bit, he'd proclaim 'I'm Chevy Chase and ____?'",
  answers: ["this is the news", "for tonight’s top story", "good evening", "you’re not"],
  a: "you're not",
},{
  question: "On 'Wayne's World', Wayne's sidekick is named _____?",
  answers: ["Garth", "Olaf", "Bart", "Gus"],
  a: "Garth",
},{
  question: "Chris Farley's Matt Foley character always threatened that 'You'll be living in a ____?'",
  answers: ["shack in the timbers", "shelter in the woods", "van down the river", "truck by the swamp"],
  a: "van down by the river",
},{
  question: "Mike Myer’s character “Simon” like do do what?",
  answers: ["drawings", "sculptures", "drum solo", "guitar solo", "paintings"],
  a: "drawings",
}];
var number = 0;
var tabIndexSet = 1;
//builds the answer radio buttons
var radioQuestion = gameArray[number].question;
//builds the answer radio buttons
//var questionListing = gameArray[j].answers;
for (var j = 0; j < gameArray.length; j++) {
  radioBuilder(j);
}
function radioBuilder() {
  //console.log(gameArray[0].question);
  //console.log(gameArray[0].answers);
  //builds the question and radios in this div
  //var result = $("#gameView");
  //sets tab index for radio buttons
  //builds the for loop inside html
  var result = $('<div>');
  //result.html('');
  //for loop
  result.append('<h3>' + gameArray[j].question + '</h3>');
  for (var i = 0; i < gameArray[j].answers.length; i++) {
    result.append('<label><input type="radio" name="usernames" value="' + gameArray[j].answers[i] + '"tabindex="' + tabIndexSet++ + '" />' + gameArray[j].answers[i] + '</label>');
    console.log("question builder is working");
    }
    result.append('<div class="correctAnswer"></div>');
    result.append('<div class="correctAnswer"></div>');
    result.appendTo("#gameView");
}
