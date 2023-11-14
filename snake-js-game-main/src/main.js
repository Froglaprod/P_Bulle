import '../css/style.css';
import Snake from '../snake';
import Playground from '../playground';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Instantiation des objets
let snake = new Snake(360, 360, 40, 40,'Up');
let playground = new Playground(canvas);

const move = () => {

  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);

  //Affichage du snake
  playground.drawSnakeHead(snake);
  


// Déplacement du snake par l'utilisateur
function handleKeyPress(event) {

  //Entrer des touches et de la direction à accorder
  switch (event.key) {

    case 'w':
    snake.direction = 'Up'
      break;

    case 's':
      snake.direction = 'Down'
      break;

    case 'a':
      snake.direction = 'Left'
      break;

    case 'd':      
    snake.direction = 'Right'
      break;
  }
}
window.addEventListener('keydown', handleKeyPress);

//Déplacement en fonction de la direction accorder
switch (snake.direction) {

 case 'Up':
 snake.moveUp();
   break;

 case 'Down':
 snake.moveDown();
   break;

 case 'Left':
   snake.moveLeft();
   break;

 case 'Right':      
 snake.moveRight();
   break;
}

  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000);

};

 

requestAnimationFrame(move);
