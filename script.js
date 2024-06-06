const testSectionForm = document.getElementById("test-section")

let currentQuestion = 0
const testQuestions = []
const wrongQuestions = []



testSectionForm.addEventListener("submit", function(event) {
  event.preventDefault()
  console.log("asdasdsad")
  console.log(testSectionForm.value)
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