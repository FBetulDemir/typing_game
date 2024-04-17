const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endGameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");


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
let time = 10;

//SELECT DIFFICULTY IF NOT SELECTED DEFAULT IS MEDIUM
let difficulty = 
    localStorage.getItem("difficulty") !==null
    ?localStorage.getItem("difficulty")
    : "medium";

//SET DIFFICULTY SELECT VALUE
difficultySelect.value =
    localStorage.getItem("difficulty") !==null
    ?localStorage.getItem("difficulty")
    : "medium" ;

//FOCUS TEXT INPUT AT THE START
text.focus();

//COUNT DOWN - THE TIME
const timeInterval = setInterval(updateTime, 1000);


//GET RANDOM WORD
function getRandomWord(){
    return words[Math.floor(Math.random()* words.length)]
}

//ADD THE WORD TO THE DOM
function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

addWordToDOM();

//UPDATE SCORE
function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

//UPDATE TIME
function updateTime(){
    time --;

    timeEl.innerHTML = time + "s";
    if (time === 0){
        clearInterval(timeInterval);

        gameOver();
    }
}

function gameOver(){
    endGameEl.innerHTML = `<h1>Time ran out!</h1> <p>Your final score is ${score}</p> <button onclick= "location.reload()">Reload</button>`;

    endGameEl.style.display = "flex";
}

text.addEventListener("input", (event) => {
    const insertedText = event.target.value;
    //console.log(insertedText);

    if(insertedText === randomWord){
        addWordToDOM();

        updateScore();

        //CLEAR INPUT FIELD
        event.target.value = "";

        //INCRIMENT THE TIME WHEN CORRECT INPUT IS ENTERED
        //time +=5;


        if (difficulty === "hard"){
            time +=2;
        } else if (difficulty === "medium"){
            time +=3;
        } else {
            time +=5;
        }
            
        updateTime();
    }
});

//SETTING BUTTON CLICK
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

//SETTINGS SELECT
settingsForm.addEventListener("change", (event) => {
    difficulty = event.target.value;

    localStorage.setItem("difficulty", difficulty);
})

