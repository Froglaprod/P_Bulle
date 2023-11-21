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
const gridSize = 40;
//Direction du snake
let direction ='Right';
//Savoir si on perd la partie
let gameOver = false;
//Savoir si on perd la partie
let gameOver1 = false;

//Instantiation des objets
let playground = new Playground(canvas);
let snakeclass = new Snake(40, 40);

//Boucle qui creer les partie du corps du snake
for (let i = 0; i < 9; i++) {
  // Ajout une partie du corps et retourne la nouvelle taille du snake
  snake.push({ x: headSnake.x, y: headSnake.y });
}
// Déplacement du snake par l'utilisateur
function handleKeyPress(event) {

  //Entrer des touches et de la direction à accorder (on ne peux pas accorder la direction si elle est opposée)
  switch (event.key) {

    case 'w':
      if(direction != 'Down')
      {
        direction = 'Up'
      }
      break;

    case 's':
      if(direction != 'Up')
      {
        direction = 'Down'
      }
      break;

    case 'a':
      if(direction != 'Right')
      {
        direction = 'Left'
      }
      break;

    case 'd':  
    if(direction != 'Left')
      {
        direction = 'Right'
      }
      break;
  }
}

const move = () => {

  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);

//Action

  //Déplacement du snake
  snakeclass.moveSnake(headSnake, direction, snake, gridSize);
  //Vérifie si le snake touche la bordure
  gameOver = snakeclass.toucheBorder(headSnake, canvas);
  //Vérifie si le snake touche son corps
  gameOver1 = snakeclass.toucheBody(headSnake, snake);
  //Affichage du snake
  playground.drawSnake(snake, gridSize);
  console.log(gameOver);
  // Si le jeu est fini on affiche game over et on stop le jeu
if(gameOver || gameOver1)
{
//Affichage du game over
playground.drawGameOver();

//Stop le jeu
return;

}

window.addEventListener('keydown', handleKeyPress);

  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000);

};

requestAnimationFrame(move);
