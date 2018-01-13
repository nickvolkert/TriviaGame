$(document).ready(function(){
//Countdown Function
var gameTime = 5;
    
//Right and Wrong Answer Log
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


//Show and hide for game divs

    //console.log("Document Load is working");
    function hideGame(){
        $("#startScreen").show();
        // $("#gameView").hide();
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
           
            
            setInterval( function() {
              $("#ticker").html(gameTime--);
            }, 1000);
            
        });
    }
//    function gameEnd(){
//        
//            $("#startScreen").hide();
//            $("#gameView").hide();
//            $("#results").show();
//            
//    }
    gameStart();
    //gameEnd();
});
//Question Variables for End of Game


//Right and wrong answer Totals
