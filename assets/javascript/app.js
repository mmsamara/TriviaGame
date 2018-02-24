var totalTime = 30;
var intervalId;
var rightAnswers = 0;
var wrongAnswers = 0;
var questions = 3;

var questionOne = $( "#question-one" ).val();
$(document).ready(function() {

	$('#questions-div').hide();

	$('#start').on('click', start);
	$('#submit').on('click', done);

	function start() {
		$("#start").hide();
		$('#questions-div').show();
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

		var answer1 = $("input[type=radio][name=q1]:checked").val();
		var answer2 = $("input[type=radio][name=q2]:checked").val();
		var answer3 = $("input[type=radio][name=q3]:checked").val();

		if (answer1 === 'a') {
			rightAnswers++;
			alert("Question 1: Right!")
		}
		else {
			wrongAnswers++;
			alert("wrong :/");
		}

		if (answer2 === 'c') {
			rightAnswers++;
			alert("Question 2: Right!")
		}
		else {
			wrongAnswers++;
			alert("wrong :/");
		}

		if (answer3 === 'b') {
			rightAnswers++;
			alert("Question 3: Right!")
		}
		else {
			wrongAnswers++;
			alert("wrong :/");
		}
	}
})
