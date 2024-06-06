const testSectionForm = document.getElementById("test-section")

let currentQuestion = 0
const questionOrder = []
const wrongQuestions = []



testSectionForm.addEventListener("submit", function(event) {
  event.preventDefault()
  console.log("asdasdsad")
  console.log(testSectionForm.value)
})
