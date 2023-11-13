//console.log ("js connected");

const ipaUrl = "https://opentdb.com/api.php?amount=10&type=multiple";
 const mainSource = document.querySelector("main");

 const form = document.querySelector("form");

 form.addEventListener("submit", (event) =>{event.preventDefault()
   mainSource.innerHTML = "";
    fetchQuestions();

});


  function fetchQuestions() { 
    fetch(ipaUrl).then(response => response.json()).then(data => {
    data.results.forEach(element => 
        generateQuestion(element))
    
    })};
    
  fetchQuestions();

function generateQuestion(obj){

    const {category, question, correct_answer} = obj;
    const questionElement = document.createElement("article");

    questionElement.innerHTML = `<article class="card">
  <h2>${category}</h2>
  <p>${question}</p>
  <button>Show Answer</button>
  <p class="hidden correct">CORRECT ANSWER: ${correct_answer}</p>
</article>`

mainSource.append(questionElement);


const showAnswerButton = questionElement.querySelector("button");

showAnswerButton.addEventListener("click", (event) =>{
    const answer = questionElement.querySelector(".correct");
   if (showAnswerButton.textContent === "Show Answer"){
    showAnswerButton.textContent = "Hide Answer"
    answer.classList.remove("hidden");
   } else {
showAnswerButton.textContent = "Show Answer";
 answer.classList.add("hidden");
    }
})
};


