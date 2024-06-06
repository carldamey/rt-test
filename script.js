const startDiv = document.getElementById("start-div")
const questionCountInput = document.getElementById("question-count-input")
const startButton = document.getElementById("start-button")
const testDiv = document.getElementById("test-div")
const testForm = document.getElementById("test-form")
const questionNumberHeader = document.getElementById("question-number-header")
const questionText = document.getElementById("question-text")
const scoreDiv = document.getElementById("score-div")
const scoreHeader = document.getElementById("score-header")
const retakeButton = document.getElementById("retake-button")

let currentQuestion = 0
let questionCount = 7
const testQuestions = []
const wrongQuestions = []

function startTest() {
	startDiv.hidden = true
}

function getRandomUniqueQuestions(array, count) {
  // Shuffle the array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Slice the shuffled array to the desired length
  return array.slice(0, count);
}



function nextQuestion() {
  questions.shift()
  currentQuestion ++
  questionNumberHeader.innerText = `QUESTION ${currentQuestion} / ${questionCount}`
  questionText.innerText = questions[0].question

}


// TODO PUT THIS WHERE IT BELONGS
const questions = getRandomUniqueQuestions(questionBank, questionCount);


testForm.addEventListener("submit", function (event) {
	event.preventDefault()

	const selectedAnswer = testForm.querySelector('input[name="test"]:checked')
	if (selectedAnswer) {
		alert(`You answered ${selectedAnswer.value}`)
    nextQuestion()
    selectedAnswer.checked = false
	} else if (!selectedAnswer) {
		alert("Please select an answer")
	}

	console.log(selectedAnswer)
})

// TODO PUT ELEMENTS IN PLACE SO THAT THE QUESTION SIZE ETC DOESNT MAKE THE BUTTONS MOVE AROUND

// When start test is pressed

// Get the amount of questions in the input field

// Pick at random that many questions from the bank

// Hide the start div

// Unhide the test div

// Display the question number out of the total questions in the question number header

// Display the question content in the <p> tag underneath

// Display the 4 available answers

// When submitted, check the selected answer against the correct answer

// If correct, remove the question from the array
// If incorrect, add it to the incorrect questions array

// Hide the test div

// Unhide the post-test div

// Display how many questions out of the total were correct, and a percentage

// Display wrong questions in a printable format

// Display retake wrong questions button
// If pressed, testQuestions = a copy of wrong questions, wrong questions = []
// Hide post-test div
// Show test div
