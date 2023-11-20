export class Playground{
     
  //On définit le context de dessin pour nos affichage
     constructor(canvas)
     {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
     }

    // Dessine le snake
    drawSnake(snake, gridSize)
    {
      //Décalagae entre chaque partie du corps
     
          // Dessine la tete du serpent à une position définit
          this.ctx.fillStyle = 'green';
          this.ctx.fillRect(snake[0].x , snake[0].y , gridSize, gridSize);
          // Dessine le corps du serpent à une position définit

          //Boucle qui permet de parourir chaque partie du serpent sauf la tete (slice(1))
          snake.slice(1).forEach(part => {
            this.ctx.fillStyle = 'yellow';
            this.ctx.fillRect(part.x , part.y , gridSize, gridSize);
          });
            
    }

    
}

export default Playground;