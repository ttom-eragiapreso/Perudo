const btn = document.getElementById('roll'); 
const result1 = document.querySelector('.die-1');
const result2 = document.querySelector('.die-2');
const result3 = document.querySelector('.die-3');
const result4 = document.querySelector('.die-4');
const result5 = document.querySelector('.die-5');

const randomNumberGenerator = () => {
    let randomNumer1 = Math.floor(Math.random()* 6 + 1);
    let randomNumer2 = Math.floor(Math.random()* 6 + 1);
    let randomNumer3 = Math.floor(Math.random()* 6 + 1);
    let randomNumer4 = Math.floor(Math.random()* 6 + 1);
    let randomNumer5 = Math.floor(Math.random()* 6 + 1);
    result1.textContent = randomNumer1;
    result2.textContent = randomNumer2;
    result3.textContent = randomNumer3;
    result4.textContent = randomNumer4;
    result5.textContent = randomNumer5;
    let resultsArray = [randomNumer1, randomNumer2, randomNumer3, randomNumer4, randomNumer5]
    localStorage.setItem('Result Player One', JSON.stringify(resultsArray));
    
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

