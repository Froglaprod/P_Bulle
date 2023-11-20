export class Playground{

     //On définit le context de dessin pour nos affichage
     constructor(canvas)
     {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
     }

    // Dessine le snake
    drawSnake(snake, grideSize)
    {

          // Dessine la tete du serpent à une position définit
          this.ctx.fillStyle = 'green';
          this.ctx.fillRect(snake[0].x , snake[0].y , grideSize, grideSize);

          // Dessine le corps du serpent à une position définit
         
          this.snake.forEach(element => {
            this.ctx.fillStyle = 'yellow';
            this.ctx.fillRect(element.x , element.y , grideSize, grideSize);
          });
            
    }

    
}

export default Playground;