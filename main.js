const boxes = document.querySelectorAll('.board div')
const restartButton = document.querySelector('.restart');
const message = document.querySelector('#message');
const possibleWins = [[1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 9],
                      [1, 5, 9],
                      [3, 5, 7],
                      [1, 4, 7],
                      [2, 5, 8],
                      [3, 6, 9]]
let turn = 0;
let gameFinished = false;

function checkWins() {
  for (let i = 0; i < possibleWins.length; i++) {
    const box1 = document.querySelector('.box' + possibleWins[i][0])
    const box2 = document.querySelector('.box' + possibleWins[i][1])
    const box3 = document.querySelector('.box' + possibleWins[i][2])
    
    if ((box1.textContent === 'X' || box1.textContent === 'O') && box1.textContent === box2.textContent && box1.textContent === box3.textContent) {
      message.textContent = box1.textContent === 'X' ? 'Player 1 wins!' : 'Player 2 wins!';
      gameFinished = true;
    }
  }

  if (!gameFinished && turn === 9) {
    message.textContent = 'Draw!';
  }
}

function selectBox(element) {
  if (!gameFinished) {
    const box = document.querySelector('.' + element);
    if (box.textContent === '') {
      turn++;
      box.textContent = turn % 2 === 0 ? 'O' : 'X';
      message.textContent = turn % 2 === 0 ? 'Player 1\'s turn' : 'Player 2\'s turn'
      checkWins()
    }
  }
}

function restartGame() {
  turn = 0;
  gameFinished = false;
  message.textContent = 'Player 1\'s turn';
  boxes.forEach(element => {
    element.textContent = '';
  });
}

restartButton.addEventListener('click', restartGame)