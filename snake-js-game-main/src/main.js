///ETML
///Auteur : Mathis Botteau
///Date   : 12.12.2023
///Description : Le but de ce projet est de creer le fameux jeux snake
///

/// La classe Main contient tout le terrain de jeux, ainsi que toutes les variables
import '../css/style.css';
import Snake from '/src/snake';
import Playground from '/src/playground';
import Apple from '/src/apple';

//Terrain de jeux
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Tableau qui stock chaque partie du corps du snake
const snake = [];
//Dimension d'une case de notre grilless
// Score de la partie
let scoreGame = 0;
const gridSize = 40;
//Direction du snake
let direction = 'Right';
//Savoir si on perd la partie
let gameOver = false;
//Savoir si on perd la partie
let gameOver1 = false;
//Savoir si on spawn une pomme
let spawnApple = true;
//Savoir si on est dans le menu
let gameStarted = false;

//Instantiation des objets
//Position de la pomme
let applePosition = { x: 0, y: 0 };
//Position x et y de la tete du snake 
const headSnake = { x: 0, y: 0 };
// Le playground
let playground = new Playground(canvas);
// Le serpent
let snakeclass = new Snake(3, 120);
// La pomme
let apple = new Apple();
// Image de la pomme
let appleImage = new Image();
// Chemin de l'image
appleImage.src = '/image/apple1.png';

// Déplacement du snake par l'utilisateur
document.addEventListener('keydown', function (event) {

  //Entrer des touches et de la direction à accorder (on ne peux pas accorder la direction si elle est opposée)
  switch (event.key) {

    case 'w':
      if (direction != 'Down') {
        direction = 'Up'
      }
      break;

    case 's':
      if (direction != 'Up') {
        direction = 'Down'
      }
      break;

    case 'a':
      if (direction != 'Right') {
        direction = 'Left'
      }
      break;

    case 'd':
      if (direction != 'Left') {
        direction = 'Right'
      }
      break;

    case ' ':
      // Si on appuie sur espace et que le jeu n'est pas lancé on lance le jeu
      if (!gameStarted) {
        gameStarted = true;
      }

      // Si on appuie sur entrer et que le jeu est fini on relance le jeu
      if (gameOver || gameOver1) {
        // Relance le jeu
        location.reload();
      }
      break;

  }
})

//Boucle qui creer les partie du corps du snake
for (let i = 0; i < snakeclass.numBody; i++) {
  // Ajout une partie du corps et retourne la nouvelle taille du snake
  snake.push({ x: headSnake.x, y: headSnake.y });
}

const move = () => {
  //Menu 
  if (!gameStarted) {
    //Affichage du menu
    playground.drawMenu();
  }

  //Lancement du jeu
  if (gameStarted) {

    // Dessine la grille de jeu
    playground.drawGrid(gridSize);

    //Vérifie si le snake mange la pomme
    spawnApple = snakeclass.eatApple(headSnake, applePosition, snake);
    //Update du score
    scoreGame = snakeclass.updateScore(headSnake, applePosition, scoreGame);

    //Si le snake mange la pomme on la fait spawn a une nouvelle position
    if (spawnApple) {
      //Donne des coordonnées aléatoire a notre pomme
      applePosition = apple.randomPosition(gridSize, applePosition);
      spawnApple = false;
    }

    //Déplacement du snake
    snakeclass.moveSnake(headSnake, direction, snake, gridSize);
    //Vérifie si le snake touche la bordure
    gameOver = snakeclass.toucheBorder(headSnake, canvas);
    //Vérifie si le snake touche son corps
    gameOver1 = snakeclass.toucheBody(headSnake, snake);
    //Affiche le score
    playground.drawScore(scoreGame, appleImage, gridSize);
    //Affichage du snake
    playground.drawSnake(snake, gridSize);
    //Affichage de la pomme
    playground.drawApple(applePosition, gridSize, appleImage);
    // Si le jeu est fini on affiche game over et on stop le jeu
    if (gameOver || gameOver1) {
      //Affichage du game over
      playground.drawGameOver();
      //Stop le jeu
      return;
    }

  };

  // Rafraichit à chaque seconde (rapidité d'affichage)
  setTimeout(() => {
    requestAnimationFrame(move);
    // Vitesse
  }, snakeclass.speed);
}
requestAnimationFrame(move);



