// function play(){
//     // step-1: hide the home screen to the hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log (playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed, you lost a life');
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress); 

function continueGame(){
 const alphabet = getARandomAlphabet();
//  console.log(alphabet);

 const currentAlphabet = document.getElementById('current-alphabet');
 currentAlphabet.innerText = alphabet;

 setBackgroundColorById(alphabet);
}

function play(){
    hideElementById("home");
    showElementById('play-ground');
    continueGame();
}