const QuizData = [
    {
        question: "Which person is most famouse in bangladesh?",
        a: "Mashrafee",
        b: "Tamim",
        c: "Me",
        d: "Manna",
        correct: "c",
    },
    {
        question: "What is the most popular programming language in 2022",
        a: "Java",
        b: "PHP",
        c: "Javascript",
        d: "python",
        correct: "c",
    },
    {
        question: "Who is the presedent of bangladesh?",
        a: "Sheikh Hasina",
        b: "Tamim",
        c: "Me",
        d: "Manna",
        correct: "a",
    },
    {
        question: "How old is Ashik?",
        a: "10",
        b: "57",
        c: "21",
        d: "24",
        correct: "d",
    },

]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz()
{
    const currentQuizData = QuizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function getSelected (){
    const answerEls = document.querySelectorAll(".answer");
        let answer = undefined;
        answerEls.forEach((answerEl)=>{
            if(answerEl.checked){
                answer = answerEl.id;
            }
    });

        return answer;
}
submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    console.log(answer);
    if(answer){
        currentQuiz++;
        if(currentQuiz<QuizData.length){
            loadQuiz();
        }else{
            alert("Exam is finished");
        }
    }

})
