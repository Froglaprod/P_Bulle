///ETML
///Auteur : Mathis Botteau
///Date   : 12.12.2023
///Description : Le but de ce projet est de creer le fameux jeux snake
///

/// La classe Playground contient tout les affichages du jeux
class Playground {

  //On définit le context de dessin pour nos affichage
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  // Efface le canvas
  clearCanvas() {
    // Clear toute la zone indiquée
    this.ctx.clearRect(0, 0, 800, 800)
  }

  // Dessine le snake
  drawSnake(snake, gridSize) {
    // Dessine la tete du serpent à une position définit
    this.ctx.fillStyle = '#3C69D9';
    this.ctx.fillRect(snake[0].x, snake[0].y, gridSize, gridSize);

    // Dessine le corps du serpent à une position définit
    //Boucle qui permet de parourir chaque partie du serpent sauf la tete (slice(1))
    for (let i = 1; i < snake.length; i++) {
      this.ctx.fillStyle = '#4E7CF6';
      this.ctx.fillRect(snake[i].x, snake[i].y, gridSize, gridSize);
    }

  }

  // Dessine la pomme
  drawApple(applePosition, gridSize, appleImage) {
    // Affiche l'image de la pomme à une position aléatoire
    this.ctx.drawImage(appleImage, applePosition.x, applePosition.y, gridSize, gridSize);
  }

  // Dessine game-over
  drawGameOver() {
    // Titre
    this.ctx.fillStyle = '#2754dd ';
    this.ctx.font = '50px Arial';
    this.ctx.fillText('Game Over', 270, 400);
    // Texte
    this.ctx.font = '30px Arial';
    this.ctx.fillText('Appuyer sur "enter" pour relancer une partie', 120, 450);
  }

  // Affiche le score
  drawScore(scoreGame, appleImage, gridSize) {
    this.ctx.fillStyle = 'White';
    this.ctx.font = '30px Arial';
    this.ctx.drawImage(appleImage, 25, 10, gridSize, gridSize);
    this.ctx.fillText(': ' + scoreGame, 70, 42);
  }

  // Dessine la grille du jeu et le terrain
  drawGrid(gridSize) {
    // Place la couleur sur chaque carreaux de la grille
    for (let x = 0; x < this.canvas.width; x += gridSize) {
      for (let y = 0; y < this.canvas.height; y += gridSize) {
        // On ajoute les couleurs différentes en fonction de si la case est paire ou impaire
        if ((x / gridSize + y / gridSize) % 2 == 0) {
          this.ctx.fillStyle = '#AAD751';
        }
        else {
          this.ctx.fillStyle = '#A2D149';
        }

        // Dessine la grille et le terrain
        this.ctx.fillRect(x, y, gridSize, gridSize);
      }
    }
  }

  // Dessine le menu
  drawMenu() {

    // Affichage du fond du menu
    this.ctx.fillStyle = '#A2D149';
    this.ctx.fillRect(0, 0, 800, 800);

    // Affichage du titre
    this.ctx.fillStyle = '#2754dd';
    this.ctx.font = '50px Broadway';
    this.ctx.fillText('Snake Game', 230, 100);

    // Affichage des contours

    // Bas
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(200, 125, 400, 4);

    // Haut
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(200, 40, 400, 4);

    // Affichage du texte
    this.ctx.fillStyle = '#2754dd';
    this.ctx.font = '40px Broadway';
    this.ctx.fillText('Appuyez sur espace pour jouer', 60, 400);

    // Affichage du texte ombre

    this.ctx.fillStyle = 'white';
    this.ctx.font = '40px Broadway';
    this.ctx.fillText('Appuyez sur espace pour jouer', 60, 398);
  }


  // Dessine le menu
  drawMenuGameover() {

    // Affichage du fond du menu
    this.ctx.fillStyle = '#A2D149';
    this.ctx.fillRect(0, 0, 800, 800);

    // Affichage du titre
    this.ctx.fillStyle = '#2754dd';
    this.ctx.font = '50px Broadway';
    this.ctx.fillText('Snake Game', 230, 100);

    // Affichage du texte
    this.ctx.fillStyle = '#2754dd';
    this.ctx.font = '40px Broadway';
    this.ctx.fillText('Game Over', 60, 400);
    this.ctx.fillText('Game Over', 60, 400);

    // Affichage du texte ombre
    this.ctx.fillStyle = 'white';
    this.ctx.font = '40px Broadway';
    this.ctx.fillText('Appuyez sur espace pour jouer', 60, 398);
  }

}

export default Playground;