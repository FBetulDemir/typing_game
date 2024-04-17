const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");


const words = [
    "dependent",
    "dog",
    "superficial",
    "admit",
    "juice",
    "javascript",
    "developer",
    "airplane",
    "great",
    "fun",
    "manipulate",
    "cat",
    "transition",
    "school",
    "computer",
    "programming",
    "drag",
    "loving",
    "north",
]
let randomWord;
let score = 0;

function getRandomWord(){
    return words[Math.floor(Math.random()* words.length)]
}

function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

addWordToDOM();

function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

text.addEventListener("input", (event) => {
    const insertedText = event.target.value;
    console.log(insertedText);

    if(insertedText === randomWord){
        addWordToDOM();
        updateScore();
        event.target.value = "";
    }
});

