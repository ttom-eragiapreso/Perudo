const btn = document.getElementById('roll'); 
let isBtnClickable = true;
const result1 = document.querySelector('.die-1');
const result2 = document.querySelector('.die-2');
const result3 = document.querySelector('.die-3');
const result4 = document.querySelector('.die-4');
const result5 = document.querySelector('.die-5');

const randomNumberGenerator = () => {
  console.log(isBtnClickable);
    if(isBtnClickable){
      isBtnClickable = false;
      let randomNumber1 = Math.floor(Math.random()* 6 + 1);
      let randomNumber2 = Math.floor(Math.random()* 6 + 1);
      let randomNumber3 = Math.floor(Math.random()* 6 + 1);
      let randomNumber4 = Math.floor(Math.random()* 6 + 1);
      let randomNumber5 = Math.floor(Math.random()* 6 + 1);
      result1.textContent = randomNumber1;
      result2.textContent = randomNumber2;
      result3.textContent = randomNumber3;
      result4.textContent = randomNumber4;
      result5.textContent = randomNumber5;
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

btn.addEventListener('click', randomNumberGenerator);
// Other types of mouve events 
// btn.addEventListener('dblclick', randomNumberGenerator);
// btn.addEventListener('mousedown', randomNumberGenerator);  as soon as the mouse is down
// btn.addEventListener('mouseup', randomNumberGenerator); as long as the mouse is clicked
// btn.addEventListener('mouseenter', randomNumberGenerator);
// btn.addEventListener('mouseleave', randomNumberGenerator);
// btn.addEventListener('mouseover', randomNumberGenerator);
// btn.addEventListener('mouseout', randomNumberGenerator);
// btn.addEventListener('mousemove', randomNumberGenerator); this fires every single time you move the mouse inside the object. Really useful in games to know exactly where your mouse is as you can extrapolate the coordinates of the mouse and place it into the world. 

