$(document).ready(function(){
//Countdown Function
var gameTime = 10;
    
//Right and Wrong Answer Log
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


//Show and hide for game divs

    //console.log("Document Load is working");
    function hideGame(){
        $("#startScreen").show();
        //$("#gameView").hide();
        //$("#results").hide();
        console.log("hide game is working");
    }
    hideGame();
    
    function radioBuilder() {
          var usernames = [
            'test1', 'test2', 'test3', 'test4'
          ];

          var result = $("#radioBuild");
            var tabIndexSet = 1;
          result.html('');

          for (var i = 0; i < usernames.length; i++) {
            result.append('<label><input type="radio" name="usernames" value="' + usernames[i] + '"tabindex="' + tabIndexSet++ + '" />' + usernames[i] + '</label>');
        
//        for (var i = 0; i < usernames.length; i++) {
//            result.append('<form><fieldset><h3>Question' + questionHeading++ + '<label><input type="radio" name="usernames" value="' + usernames[i] + '"tabindex="' + tabIndexSet++ + '" />' + usernames[i] + '</label></fieldset></form>');
//              
          } 
        }
    
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
//        if (gameTime === 0){
//            $("#startScreen").hide();
//            $("#gameView").hide();
//            $("#results").show();
//            }
//    }
    gameStart();
    radioBuilder();
    //gameEnd();
});
//Question Variables for End of Game


//Right and wrong answer Totals
