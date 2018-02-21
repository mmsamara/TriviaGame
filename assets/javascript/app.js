var totalTime = 60;
var intervalId;
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

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

			alert('Time Up!');
		}
	}

	function stop() {
		clearInterval(intervalId);
	}

	function done() {
		var answer = $("input[type=radio][name=optradio]:checked").val();

		if (answer === 'right') {
			alert("That's Correct!");
		}
		else {
			alert("That's Wrong :/");
		}
	}
})
