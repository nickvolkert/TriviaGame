jQuery(function(){
	triviaGame.init();
});

var triviaGame = (function ($){
	function init () {
    // JavaScript Document
    //game start
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
    var label = 0;
    var input = 0;
    var group = 0;
    var tabIndexSet = 1;
    //builds the answer radio buttons
    var radioQuestion = gameArray[number].question;
    //builds the answer radio buttons
    for (var j = 0; j < gameArray.length; j++) {
      radioBuilder(j);
    }
    function radioBuilder() {
      //builds the for loop inside html
      var result = $('<fieldset id="group' + number++ + '">');
      //for loop
      result.append('<h2>' + gameArray[j].question + '</h2>');
      for (var i = 0; i < gameArray[j].answers.length; i++) {
        result.append('<input type="radio" value="' + gameArray[j].answers[i] + '"tabindex="' + tabIndexSet++ + '"id="answer' + input++ + '"name="group' + number + 
        '"/><label for="answer' + label++ + '">' + gameArray[j].answers[i] + '</label>');
        console.log("question builder is working");
        }
        result.append('<div class="correctAnswer"><h3>Sorry that&#39;s incorrect</h3><div class="gif"></div></div>');
        result.append('<div class="incorrectAnswer"><h3>That&#39;s incorrect!</h3><div class="gif"></div></div>');
        result.appendTo("#radioBuild form");
    }

      var rightAnswers = 0;
      var wrongAnswers = 0;
      var unAnswered = 6;

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
          $("#group0 input").on("click", function(){
            $(this).addClass("checked");
            console.log("Q1 click is working")
            if ($("#answer2").hasClass("checked")){
              rightAnswers++;
              unAnswered--;
              $("#group0 .correctAnswer").show();
              $("#group0 .incorrectAnswer").hide();
              console.log("Q1 correct answer is working")
            } else if (!$("input#answer3").hasClass("checked")){
              unAnswered++;
              $("#group0 .incorrectAnswer").show();
              console.log("Q1 INCORRECT answer is working")
            } else {
              wrongAnswers++;
              $("#group0 .incorrectAnswer").show();
              $("#group0 .correctAnswer").hide();
            }
          });

          //Question02
          $("#group1 input").on("click", function(){
            $(this).addClass("checked");
            if ($("input#answer7").hasClass("checked")){
              rightAnswers++;
              unAnswered--;
              $("#group1 .correctAnswer").show();
              $("#group1 .incorrectAnswer").hide();
            } else if (!$("input#answer3").hasClass("checked")){
              unAnswered++;

              $("#group1 .incorrectAnswer").show();
            } else {
              wrongAnswers++;
              $("#group1 .incorrectAnswer").show();
              $("#group1 .correctAnswer").hide();
            }
          });

          //Question03
          $("#group2 input").on("click", function(){
            $(this).addClass("checked");
            if ($("input#answer12").hasClass("checked")){
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

          //Question04
          $("#group3 input").on("click", function(){
            $(this).addClass("checked");
            if ($("input#answer13").hasClass("checked")){
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

          //Question05
          $("#group4 input").on("click", function(){
            $(this).addClass("checked");
            if ($("input#answer19").hasClass("checked")){
              rightAnswers++;
              unAnswered--;
              $("#group4 .correctAnswer").show();
              $("#group4 .incorrectAnswer").hide();
              stop();
              $("#startScreen").hide();
              $("#gameView").delay(5000).hide(0);
              $("#results").delay(5000).show(0);
            } else if (!$("input#answer3").hasClass("checked")){
              unAnswered++;
              $("#group4 .incorrectAnswer").show();
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
} return {
       init:init
   };
})(jQuery);
