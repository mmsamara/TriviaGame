var totalTime = 60;
var intervalId;
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var answerArray = [];

var questionOne = $( "#question-one" ).val();
$(document).ready(function() {

	$('#start').on('click', start);
	$('#submit').on('click', done);

	function start() {
		clearInterval(intervalId);
		intervalId = setInterval(decrement, 1000);
	}

	function decrement() {
		totalTime--;
		$('#timer').html('<h2>' + totalTime + '</h2>');
		console.log(totalTime);

		if (totalTime === 0) {
			stop();

			done();
		}
	}

	function stop() {
		clearInterval(intervalId);
	}

	function done() {
		var answer = $("input[type=radio][name=optradio]:checked").val();
		var answer2 = $("input[type=radio][name=optradio2]:checked").val();
		var answer3 = $("input[type=radio][name=optradio3]:checked").val();


		if (answer === 'right' || answer2 === 'right' || answer3 === 'right') {
			rightAnswers++;
		}
		else if (answer === 'wrong' || answer === 'wrong' || answer === 'wrong') {
			wrongAnswers++;
		}
		else {
			unanswered++;
		}
		alert("Right answers: " + rightAnswers);
		alert("Wrong answers: " + wrongAnswers);
		alert("unanswered: " + unanswered);
	}

	console.log("<!--testing-->")
})
