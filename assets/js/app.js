$(document).ready(function(){
//Countdown Function
var gameTime = 60;
function decrement(){
    gameTime--;
}
function run(){
    gameTime = setInterval(decrement, 1000);
}
//Right and Wrong Answer Log
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


//Show and hide for game divs

    //console.log("Document Load is working");
    function hideGame(){
        $("#startScreen").show();
        $("#gameView").hide();
        $("#results").hide();
        console.log("hide game is working");
    };
    hideGame();
    function gameStart(run){
        $("#startScreen a").on("click", function(){
            $("#startScreen").hide();
            $("#gameView").show();
            $("#results").hide();
            console.log("Button Click is working");
           
            $("#ticker").html(gameTime);
           
        }
    )};
    gameStart();
});
//Question Variables for End of Game


//Right and wrong answer Totals
