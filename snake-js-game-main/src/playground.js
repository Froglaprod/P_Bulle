class Playground{

  //On définit le context de dessin pour nos affichage
     constructor(canvas)
     {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
     }

     // Efface le canvas
     clearCanvas()
     {
      // Clear toute la zone indiquée
      this.ctx.clearRect(0,0,800,800)
     }

    // Dessine le snake
    drawSnake(snake, gridSize)
    {
          // Dessine la tete du serpent à une position définit
          this.ctx.fillStyle = '#3C69D9';
          this.ctx.fillRect(snake[0].x , snake[0].y , gridSize, gridSize);

          // Dessine le corps du serpent à une position définit
          //Boucle qui permet de parourir chaque partie du serpent sauf la tete (slice(1))
for(let i = 1; i < snake.length; i++) 
  {
    this.ctx.fillStyle = '#4E7CF6';
    this.ctx.fillRect(snake[i].x , snake[i].y , gridSize, gridSize);
  }
            
    }

    // Dessine la pomme
    drawApple(applePosition, gridSize, appleImage)
    {
      // Affiche l'image de la pomme à une position aléatoire
      this.ctx.drawImage(appleImage,applePosition.x , applePosition.y , gridSize, gridSize);
    }

    // Dessine game over
    drawGameOver()
    {
      // Si le jeu est fini on affiche game over
      this.ctx.fillStyle = '#2754dd ';
      this.ctx.font = '50px Arial';
      this.ctx.fillText('Game Over', 270, 400);
    }

    // Affiche le score
    drawScore(scoreGame, appleImage, gridSize)
    {
      this.ctx.fillStyle = 'White';
      this.ctx.font = '30px Arial';
      this.ctx.drawImage(appleImage, 25, 10, gridSize, gridSize);
      this.ctx.fillText(': '+ scoreGame, 70, 42);
    }

    // Dessine la grille du jeu et le terrain
    drawGrid(gridSize)
    {
      // Place la couleur sur chaque carreaux de la grille
      for (let x =0; x < this.canvas.width; x += gridSize)
      {
        for (let y =0; y < this.canvas.height; y += gridSize)
        {
          // On ajoute les couleurs différentes en fonction de si la case est paire ou impaire
          if((x / gridSize + y / gridSize) % 2 == 0)
          {
            this.ctx.fillStyle = '#AAD751';
          }
          else
          {
            this.ctx.fillStyle = '#A2D149';
          }
          
          // Dessine la grille et le terrain
          this.ctx.fillRect(x, y, gridSize, gridSize);
        }
      }
    }

    // Dessine le menu
    drawMenu(titleImage)
    {
      // Affichage du fond du menu
      this.ctx.fillStyle = '#A2D149';
      this.ctx.fillRect(0, 0, 800, 800);

      // Affichage du titre
      this.ctx.drawImage(titleImage, 100, 310, 1000, 1000 );

    }
    
}

export default Playground;