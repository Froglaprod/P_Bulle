import '../css/style.css';
import Snake from '../snake';
import Playground from '../playground';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Position x et y de la tete du snake 
const headSnake = {x:0, y:0 };
//Tableau qui stock chaque partie du corps du snake
const snake = [];
//Dimension d'une case de notre grilless
const gridSize = 60;
//Direction du snake
let direction ='Right';

//Instantiation des objets
let playground = new Playground(canvas);
let snakeclass = new Snake(60, 60);

//Boucle qui creer les partie du corps du snake
for (let i = 0; i < 3; i++) {
  snake.push({ x: headSnake.x, y: headSnake.y });
}
// Déplacement du snake par l'utilisateur
function handleKeyPress(event) {

  //Entrer des touches et de la direction à accorder
  switch (event.key) {

    case 'w':
    direction = 'Up'
      break;

    case 's':
      direction = 'Down'
      break;

    case 'a':
      direction = 'Left'
      break;

    case 'd':      
    direction = 'Right'
      break;
  }
}

const move = () => {

  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);

  //Déplacement du snake
  snakeclass.moveSnake(headSnake, direction, snake, gridSize);
  //Affichage du snake
  playground.drawSnake(snake, gridSize);

window.addEventListener('keydown', handleKeyPress);

  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000);

};

requestAnimationFrame(move);
