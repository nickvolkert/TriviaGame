$(document).ready(function(){
  //Right and Wrong Answer Log
  var rightAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 6;

    //Uncheck all radios
    function clearRadios(){
    $("#gameView input").prop('checked', false);
    }
    //Countdown Function
    var gameTime = 60;
    var intervalId;
    function decrement() {
      $("#ticker").text(gameTime--);
      if (gameTime === 11){
        $("#ticker").css("color", "red");
      }
      if (gameTime === -1){
        console.log("game ticker detector is working");
        stop();
        $("#startScreen").hide();
        $("#gameView").hide();
        $("#results").show();
      }
  	}
    function stop() {
    	clearInterval(intervalId);
    }
    function gameTicker(){
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);

    };

    //Game Start
    function gameStart(){
        $("#startScreen a").on("click", function(){
          $("#startScreen").hide();
          $("#gameView").show();
          $("#results").hide();
          console.log("Button Click is working");
          gameTicker();
      });
    }
    gameStart();

    //Radio Click functions
    function gamePlay(){
        clearRadios();
        //Question01
        $("#group1 input").on("click", function(){
          $(this).addClass("checked");
          if ($("input#answer3").hasClass("checked")){
            rightAnswers++;
            unAnswered--;
            $("#group1 .correctAnswer").show();
            $("#group1 .incorrectAnswer").hide();
            //$("#group1").delay(5000).hide(0);
            //$("#group2").delay(5000).show(0);

            console.log("Q1 correct answer is working")
          } else if (!$("input#answer3").hasClass("checked")){
            unAnswered++;

            $("#group1 .incorrectAnswer").show();
            console.log("Q1 INCORRECT answer is working")
          } else {
            wrongAnswers++;
            $("#group1 .incorrectAnswer").show();
            $("#group1 .correctAnswer").hide();
          }
        });

        //Question02
        $("#group2 input").on("click", function(){
          $(this).addClass("checked");
          if ($("input#answer7").hasClass("checked")){
            rightAnswers++;
            unAnswered--;
            $("#group2 .correctAnswer").show();
            $("#group2 .incorrectAnswer").hide();
          } else if (!$("input#answer3").hasClass("checked")){
            unAnswered++;

            $("#group2 .incorrectAnswer").show();
          } else {
            wrongAnswers++;
            $("#group2 .incorrectAnswer").show();
            $("#group2 .correctAnswer").hide();
          }
        });

        //Question03
        $("#group3 input").on("click", function(){
          $(this).addClass("checked");
          if ($("input#answer12").hasClass("checked")){
            rightAnswers++;
            unAnswered--;
            $("#group3 .correctAnswer").show();
            $("#group3 .incorrectAnswer").hide();
          } else if (!$("input#answer3").hasClass("checked")){
            unAnswered++;

            $("#group3 .incorrectAnswer").show();
          } else {
            wrongAnswers++;
            $("#group3 .incorrectAnswer").show();
            $("#group3 .correctAnswer").hide();
          }
        });

        //Question04
        $("#group4 input").on("click", function(){
          $(this).addClass("checked");
          if ($("input#answer13").hasClass("checked")){
            rightAnswers++;
            unAnswered--;
            $("#group4 .correctAnswer").show();
            $("#group4 .incorrectAnswer").hide();
          } else if (!$("input#answer3").hasClass("checked")){
            unAnswered++;
            $("#group4 .incorrectAnswer").show();
          } else {
            wrongAnswers++;
            $("#group4 .incorrectAnswer").show();
            $("#group4 .correctAnswer").hide();
          }
        });

        //Question05
        $("#group5 input").on("click", function(){
          $(this).addClass("checked");
          if ($("input#answer19").hasClass("checked")){
            rightAnswers++;
            unAnswered--;
            $("#group5 .correctAnswer").show();
            $("#group5 .incorrectAnswer").hide();
            stop();
            $("#startScreen").hide();
            $("#gameView").delay(5000).hide(0);
            $("#results").delay(5000).show(0);
          } else if (!$("input#answer3").hasClass("checked")){
            unAnswered++;
            $("#group5 .incorrectAnswer").show();
            stop();
            $("#startScreen").hide();
            $("#gameView").delay(5000).hide(0);
            $("#results").delay(5000).show(0);
          } else {
            wrongAnswers++;
            $("#group5 .incorrectAnswer").show();
            $("#group5 .correctAnswer").hide();
          }
        });
    }

    //Score Keeping for Final Screen
    function scoreBucket(){
      $("#correctAnswers").text(rightAnswers);
      $("#incorrectAnswers").text(wrongAnswers);
      $("#unanswered").text(unAnswered);
      console.log("score bucket is working");
    }
    //Play Game Again
    function reset(){
      $("#tryAgain").on("click", function(){
        $("#correct").text("0");
        $("#incorrect").text("0");
        $("#unanswered").text("6");
        $("#startScreen").show();
        $("#gameView").hide();
        $("#results").hide();
        $(".correctAnswer").hide();
        $(".incorrectAnswer").hide();
        $("#ticker").text(gameTime = 60).css('');
        console.log("reset button is working");
      });

    }
    gamePlay();
    scoreBucket();
    reset();
});
