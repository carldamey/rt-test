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
const testQuestions = []
const wrongQuestions = []



testForm.addEventListener("submit", function(event) {
  event.preventDefault()

  const selectedAnswer = testForm.querySelector('input[name="test"]:checked');
  if (selectedAnswer) {
    alert(`You answered ${selectedAnswer.value}`)
  } else if (!selectedAnswer) {
    alert("Please select an answer")
  }

  console.log(selectedAnswer)
})


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