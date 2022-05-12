let color = "black";
let colorPicker = document.getElementById("colorPicker");
let click = true;

function makeBoard(size){
  let board = document.querySelector('.board');
  let square = board.querySelectorAll('div');
  square.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let gridAmount = size * size;

  for (let i = 0; i < gridAmount; i++){
    let square = document.createElement("div");
    square.addEventListener("mouseover",colorSquare);
    square.style.backgroundColor = "White";
    board.insertAdjacentElement("beforeend", square);
  }
}

makeBoard(16);


function changeGrid(input) {
  let userInput = document.querySelector('.userInput');

  if (input >= 2 && input <= 100){
    makeBoard(input);
  }
  else{
    alert("Please choose a number between 2 and 100.");
    userInput.value = 16;
  }
}

function colorSquare(){
  if(click) {
    this.style.backgroundColor = color;
  }
}

function changeColor(){
  color = colorPicker.value;
  document.div.style.backgroundColor = color;
}

function eraser(){
  color = "white";
}

function defaultColor(){
  color = "black";
}

function reset(){
  makeBoard(16);
}

document.querySelector('body').addEventListener('click', (e) => {
  if(e.target.tagName != 'BUTTON'){
    click = !click;
    if(click){
      document.querySelector(".drawingMode").textContent = "Mode: Drawing";
    } else {
      document.querySelector(".drawingMode").textContent = "Mode: Not Drawing";
    }
  }
});