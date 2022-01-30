let buttons = document.querySelectorAll("button");
let onScreen = document.querySelector(".screen");
let answer = document.querySelector(".answer");
let valueOne = 0;
let valueTwo = 0;
let whichOperator = '';
let result = 0;
let equals = document.querySelector(".doMath");


for (let i = 0; i < buttons.length; i++){
buttons[i].addEventListener("click", function(){
      if (buttons[i].classList.contains('clearScreen')){
        onScreen.innerHTML = ''
      } else if ((buttons[i].classList.contains('basic') && onScreen.innerHTML == result)){
        onScreen.innerHTML = '';
        onScreen.append(buttons[i].value);
        valueOne = buttons[i].value;
      } else if (onScreen.innerText.length <= 10){
      if (buttons[i].classList.contains('basic')){
        if (onScreen.innerHTML[0] != '*' && onScreen.innerHTML[0] != '/' && onScreen.innerHTML[0] != '+' && onScreen.innerHTML[0] != '-' && onScreen.innerHTML[0] != '%'){
        onScreen.append(buttons[i].value);
        valueOne = onScreen.innerHTML;
        } else {
          onScreen.innerHTML = '';
          onScreen.append(buttons[i].value);
          valueTwo = onScreen.innerHTML;
        }
      } else if (buttons[i].classList.contains('operator')){
        whichOperator = buttons[i].value;
        valueOne = onScreen.innerHTML;
        onScreen.innerHTML = buttons[i].value;
        
      } else if (buttons[i].classList.contains('doMath')){
        equals.disabled = true;
        setTimeout(()=>{
          equals.disabled = false;
        }, 1000);
        if (whichOperator === '+'){
          result = parseInt(valueOne) + parseInt(valueTwo);
          if (Number.isInteger(result)){
            onScreen.innerHTML = result;
          valueOne = 0;
          valueTwo = result
          } else {
          onScreen.innerHTML = result.toFixed(3);
          valueOne = 0;
          valueTwo = result.toFixed(3);
          }
        } else if (whichOperator === '-'){
          result = valueOne - valueTwo;
          if (Number.isInteger(result)){
            onScreen.innerHTML = result;
          valueOne = 0;
          valueTwo = result;
          } else {
          onScreen.innerHTML = result.toFixed(3);
          valueOne = 0;
          valueTwo = result.toFixed(3);
          }
        } else if (whichOperator === '*'){
          result = valueOne * valueTwo;
          if (Number.isInteger(result)){
            onScreen.innerHTML = result;
          valueOne = 0;
          valueTwo = result;
          } else {
          onScreen.innerHTML = result.toFixed(3);
          valueOne = 0;
          valueTwo = result.toFixed(3);
          }
        } else if (whichOperator === '/'){
          result = valueOne / valueTwo;
            if (result === NaN || result === Infinity){
              onScreen.innerHTML = ''
              result = "KEKW";
              onScreen.append(result);
              valueOne = 0;
              valueTwo = 0;
            } else {
            onScreen.innerHTML = result.toFixed(3)
            valueOne = 0;
            valueTwo = result;
            };
        } else if (whichOperator === '%'){
          result = valueOne / valueTwo;
          if (Number.isInteger(result)){
          onScreen.innerHTML = result;
          valueOne = 0;
          valueTwo = result;
          } else {
          onScreen.innerHTML = result.toFixed(3);
          valueOne = 0;
          valueTwo = result.toFixed(3);
          };
        };
      };
    };
  });
};
