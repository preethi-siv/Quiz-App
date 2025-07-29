const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const topicSelect = document.getElementById("topic-select");
const quizContainer = document.getElementById("quiz");

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

const questions = {
  maths: [
    [ // Set 1
      {
        question: "What is the value of (3² + 4²)?",
        options: ["12", "25", "5", "7"],
        answer: "25"
      },
      {
        question: "Simplify: (5 × 3) + 2",
        options: ["15", "17", "20", "13"],
        answer: "17"
      },
      {
        question: "What is the square root of 144?",
        options: ["11", "12", "13", "14"],
        answer: "12"
      },
      {
        question: "Solve: 2x = 10",
        options: ["2", "5", "10", "20"],
        answer: "5"
      },
      {
        question: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        answer: "30"
      }
    ],
    [ // Set 2
      {
        question: "What is 7²?",
        options: ["49", "56", "14", "64"],
        answer: "49"
      },
      {
        question: "If x = 3, what is x³?",
        options: ["6", "9", "27", "30"],
        answer: "27"
      },
      {
        question: "What is 100 ÷ 4?",
        options: ["20", "25", "30", "40"],
        answer: "25"
      },
      {
        question: "What is the LCM of 4 and 5?",
        options: ["10", "15", "20", "25"],
        answer: "20"
      },
      {
        question: "Solve: 18 - 5 × 2",
        options: ["13", "8", "10", "9"],
        answer: "8"
      }
    ],
    [ // Set 3
      {
        question: "What is the cube of 2?",
        options: ["4", "6", "8", "10"],
        answer: "8"
      },
      {
        question: "Find x: 3x = 21",
        options: ["6", "7", "8", "9"],
        answer: "7"
      },
      {
        question: "What is the next prime after 7?",
        options: ["9", "10", "11", "13"],
        answer: "11"
      },
      {
        question: "What is 9 + 6 ÷ 3?",
        options: ["5", "11", "13", "15"],
        answer: "11"
      },
      {
        question: "What is the area of a square with side 4?",
        options: ["8", "12", "16", "20"],
        answer: "16"
      }
    ]
  ],
  science: [
    [ // Set 1
      {
        question: "What is the boiling point of water?",
        options: ["90°C", "95°C", "100°C", "110°C"],
        answer: "100°C"
      },
      {
        question: "What gas do plants absorb?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
      },
      {
        question: "Which organ pumps blood?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        answer: "Heart"
      },
      {
        question: "Which vitamin is from sunlight?",
        options: ["A", "B", "C", "D"],
        answer: "D"
      }
    ],
    [ // Set 2
      {
        question: "Which part of the plant makes food?",
        options: ["Root", "Leaf", "Stem", "Flower"],
        answer: "Leaf"
      },
      {
        question: "Which gas is essential for breathing?",
        options: ["Hydrogen", "Carbon", "Oxygen", "Nitrogen"],
        answer: "Oxygen"
      },
      {
        question: "Water is made up of?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
      },
      {
        question: "Which part controls the body?",
        options: ["Stomach", "Heart", "Brain", "Lungs"],
        answer: "Brain"
      },
      {
        question: "What force pulls things down?",
        options: ["Magnetism", "Gravity", "Friction", "Speed"],
        answer: "Gravity"
      }
    ],
    [ // Set 3
      {
        question: "Which sense organ helps us see?",
        options: ["Ear", "Nose", "Eye", "Skin"],
        answer: "Eye"
      },
      {
        question: "What is H2O?",
        options: ["Salt", "Water", "Air", "Fire"],
        answer: "Water"
      },
      {
        question: "What color is the sun?",
        options: ["Blue", "Red", "Yellow", "Green"],
        answer: "Yellow"
      },
      {
        question: "Which animal lays eggs?",
        options: ["Cat", "Dog", "Hen", "Tiger"],
        answer: "Hen"
      },
      {
        question: "Which metal is liquid at room temp?",
        options: ["Iron", "Copper", "Mercury", "Gold"],
        answer: "Mercury"
      }
    ]
  ],
  gk: [
    [ // Set 1
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
      },
      {
        question: "Which is the largest ocean?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
      },
      {
        question: "Who wrote the national anthem?",
        options: ["Gandhi", "Tagore", "Nehru", "Tilak"],
        answer: "Tagore"
      },
      {
        question: "Which day is Independence Day?",
        options: ["Aug 14", "Aug 15", "Jan 26", "Oct 2"],
        answer: "Aug 15"
      },
      {
        question: "National animal of India?",
        options: ["Lion", "Tiger", "Elephant", "Peacock"],
        answer: "Tiger"
      }
    ],
    [ // Set 2
      {
        question: "First PM of India?",
        options: ["Gandhi", "Nehru", "Patel", "Rajaji"],
        answer: "Nehru"
      },
      {
        question: "Currency of Japan?",
        options: ["Yen", "Won", "Rupee", "Dollar"],
        answer: "Yen"
      },
      {
        question: "Taj Mahal is in?",
        options: ["Delhi", "Agra", "Jaipur", "Lucknow"],
        answer: "Agra"
      },
      {
        question: "Largest continent?",
        options: ["Europe", "Africa", "Asia", "Australia"],
        answer: "Asia"
      },
      {
        question: "How many planets in solar system?",
        options: ["7", "8", "9", "10"],
        answer: "8"
      }
    ],
    [ // Set 3
      {
        question: "Where is Eiffel Tower?",
        options: ["London", "Paris", "Rome", "Berlin"],
        answer: "Paris"
      },
      {
        question: "Fastest land animal?",
        options: ["Lion", "Cheetah", "Tiger", "Leopard"],
        answer: "Cheetah"
      },
      {
        question: "Largest desert?",
        options: ["Thar", "Gobi", "Sahara", "Kalahari"],
        answer: "Sahara"
      },
      {
        question: "Which festival is called Festival of Lights?",
        options: ["Holi", "Diwali", "Eid", "Navratri"],
        answer: "Diwali"
      },
      {
        question: "Who is known as Father of the Nation?",
        options: ["Tagore", "Bose", "Gandhi", "Nehru"],
        answer: "Gandhi"
      }
    ]
  ]
};

startButton.addEventListener("click", () => {
  const topic = topicSelect.value;
  if (!topic) {
    alert("Please select a topic");
    return;
  }

  const topicSets = questions[topic];
  const randomSetIndex = Math.floor(Math.random() * topicSets.length);
  selectedQuestions = topicSets[randomSetIndex];

  score = 0;
  currentQuestionIndex = 0;
  startButton.style.display = "none";
  topicSelect.style.display = "none";
  quizContainer.classList.remove("hide");

  showQuestion();
});

function showQuestion() {
  resetState();
  let currentQuestion = selectedQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
    answerButtons.appendChild(button);
  });

  nextButton.style.display = "none";
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(selectedBtn, correctAnswer) {
  const isCorrect = selectedBtn.innerText === correctAnswer;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.innerText === correctAnswer) {
      button.classList.add("correct");
    }
  });

  nextButton.innerText = currentQuestionIndex < selectedQuestions.length - 1 ? "Next" : "Show Score";
  nextButton.classList.remove("hide");
  nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${selectedQuestions.length}!`;
  nextButton.innerText = "Refresh";
  nextButton.onclick = () => location.reload();
  nextButton.classList.remove("hide");
  nextButton.style.display = "inline-block";
}
