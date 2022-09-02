// Player One Variables

const btnPlayerOne = document.getElementById('roll'); 
const playerOneResult1 = document.querySelector('.die-1');
const playerOneResult2 = document.querySelector('.die-2');
const playerOneResult3 = document.querySelector('.die-3');
const playerOneResult4 = document.querySelector('.die-4');
const playerOneResult5 = document.querySelector('.die-5');
const playerOneGuess = document.querySelector('.guess');
const playerOneNumberOfDice = document.querySelector('.number-of-dice');
const playerOneValueOfDice = document.querySelector('.value-of-dice');
let isBtnClickable = true;
let isGuessClickable = true;
// Player Two Variables

const btnPlayerTwo = document.getElementById('roll-1'); 
const playerTwoResult1 = document.querySelector('.die-1-1');
const playerTwoResult2 = document.querySelector('.die-2-1');
const playerTwoResult3 = document.querySelector('.die-3-1');
const playerTwoResult4 = document.querySelector('.die-4-1');
const playerTwoResult5 = document.querySelector('.die-5-1');
const playerTwoGuess = document.querySelector('.guess-1');
const playerTwoNumberOfDice = document.querySelector('.number-of-dice-1');
const playerTwoValueOfDice = document.querySelector('.value-of-dice-1');
let isBtn1Clickable = true;
let isGuess1Clickable = true;



// Adding an event on P1 roll of dice


const randomNumberGenerator = () => {
  if(isBtnClickable){
    isBtnClickable = false;
    let randomNumber1 = Math.floor(Math.random()* 6 + 1);
    let randomNumber2 = Math.floor(Math.random()* 6 + 1);
    let randomNumber3 = Math.floor(Math.random()* 6 + 1);
    let randomNumber4 = Math.floor(Math.random()* 6 + 1);
    let randomNumber5 = Math.floor(Math.random()* 6 + 1);
    playerOneResult1.textContent = randomNumber1;
    playerOneResult2.textContent = randomNumber2;
    playerOneResult3.textContent = randomNumber3;
    playerOneResult4.textContent = randomNumber4;
    playerOneResult5.textContent = randomNumber5;
    let resultsArray = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
    if(localStorage.getItem('Result Player One') === null){
      localStorage.setItem('Result Player One', JSON.stringify(resultsArray));
    }
    else {
      return
    };
  }
  else {
    console.error('Wait for next turn');
  }
};

btnPlayerOne.addEventListener('click', randomNumberGenerator);


// Adding an event of P1 Guess

const checkGuess = function (){
    if(isGuessClickable){
      isGuessClickable = false;
      let resultPlayerOne = JSON.parse(localStorage.getItem('Result Player One'));
      let resultPlayerTwo = JSON.parse(localStorage.getItem('Result Player Two'));
      let resultPlayerOneFiltered = resultPlayerOne.filter(value => value == playerOneValueOfDice.value);
      let resultPlayerTwoFiltered = resultPlayerTwo.filter(value => value == playerOneValueOfDice.value);
      let resultCombinedFiltered = resultPlayerOneFiltered.concat(resultPlayerTwoFiltered);
      console.log(resultCombinedFiltered);
      if(resultCombinedFiltered.length >= playerOneNumberOfDice.value){
        console.log('You win');
      }
      else {
        console.log('You lose');
      }
      
      }
      else {
        return
      }
    }
  

playerOneGuess.addEventListener('click', checkGuess)



const randomNumberGenerator1 = () => {
  if(isBtn1Clickable){
    isBtn1Clickable = false;
    let randomNumber1 = Math.floor(Math.random()* 6 + 1);
    let randomNumber2 = Math.floor(Math.random()* 6 + 1);
    let randomNumber3 = Math.floor(Math.random()* 6 + 1);
    let randomNumber4 = Math.floor(Math.random()* 6 + 1);
    let randomNumber5 = Math.floor(Math.random()* 6 + 1);
    playerTwoResult1.textContent = randomNumber1;
    playerTwoResult2.textContent = randomNumber2;
    playerTwoResult3.textContent = randomNumber3;
    playerTwoResult4.textContent = randomNumber4;
    playerTwoResult5.textContent = randomNumber5;
    let resultsArray1 = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
    if(localStorage.getItem('Result Player Two') == null){
      localStorage.setItem('Result Player Two', JSON.stringify(resultsArray1));
    }
    else {
      return
    };
  }
  else {
    console.error('Wait for next turn');
  }
}
btnPlayerTwo.addEventListener('click', randomNumberGenerator1);

const checkGuess1 = function (){
  if(isGuess1Clickable){
    isGuess1Clickable = false;
    let resultPlayerOne = JSON.parse(localStorage.getItem('Result Player One'));
    let resultPlayerTwo = JSON.parse(localStorage.getItem('Result Player Two'));
    let resultPlayerOneFiltered = resultPlayerOne.filter(value => value == playerTwoValueOfDice.value);
    let resultPlayerTwoFiltered = resultPlayerTwo.filter(value => value == playerTwoValueOfDice.value);
    let resultCombinedFiltered = resultPlayerOneFiltered.concat(resultPlayerTwoFiltered);
    console.log(resultCombinedFiltered);
    if(resultCombinedFiltered.length >= playerTwoNumberOfDice.value){
      console.log('You win');
    }
    else {
      console.log('You lose');
    }
    
    }
    else {
      return
    }
  }

  playerTwoGuess.addEventListener('click', checkGuess1);