let questions = [
    {
        question: "What university did we first meet?",
        answers: [
            "AMA University",
            "De La Salle University",
            "National University"
        ],
        correct: 0
    },
    {
        question: "Who texted first?",
        answers: [
            "Carlos",
            "Terd",
            "Me"
        ],
        correct: 2
    },
    {
        question: "Who said 'I love you' first?",
        answers: [
            "Terd",
            "Kim",
            "Both of us"
        ],
        correct: 0
    },
    {
        question: "When did we become official?",
        answers: [
            "07/18/23",
            "04/27/24",
            "04/27/23"
        ],
        correct: 2
    },
    {
        question: "Who loves to eat the most?",
        answers: [
            "Terd",
            "Kim",
            "Both of us"
        ],
        correct: 2
    }
];

let currentQuestion = 0;

function displayQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;

    document.getElementById("answerA").innerHTML = question.answers[0];
    document.getElementById("answerB").innerHTML = question.answers[1];
    document.getElementById("answerC").innerHTML = question.answers[2];
}

displayQuestion();

function checkAnswer(answer) {
    const isCorrect = (answer === questions[currentQuestion].correct);

    Swal.fire({
        title: isCorrect ? 'Correctt!!' : 'Engkk!!',
        text: isCorrect ? 'ILOVEYOUSOSOMUCHH!!' : 'YOU DONT LOVE ME NAA!!',
        icon: isCorrect ? 'success' : 'error',
        confirmButtonColor: '#ffb6c1',
        confirmButtonText: 'Continue'
    }).then(() => {
        // Runs only AFTER the user clicks "Continue"
        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            Swal.fire({
                title: 'Quiz Completedd!!',
                text: 'You finished all the questionss!! ILOVEYOUSOSOMUCHH!!',
                confirmButtonColor: '#ffb6c1',
                confirmButtonText: 'Back to Home'
            }).then(() => {
                returnToHome();
            });
        }
    });
}

function returnToHome() {
    window.location.href = "../index.html";
}