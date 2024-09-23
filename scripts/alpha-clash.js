// function play(){
//     // step-1: hide the home screen to the hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function continueGame(){
 const alphabet = getARandomAlphabet();
 console.log(alphabet);

 const newAlphabet = document.getElementById('current-alphabet');
 newAlphabet.innerText = alphabet;

 setBackgroundColorById(alphabet);
}

function play(){
    hideElementById("home");
    showElementById('play-ground');
    continueGame();
}