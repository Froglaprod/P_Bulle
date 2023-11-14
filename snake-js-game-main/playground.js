export class Playground{

     //On définit le context de dessin pour nos affichage
     constructor(canvas)
     {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
     }

    // Dessine la tete du serpent à une position définit
    drawSnakeHead(snake)
    {
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }

    // Dessine le corps du serpent à une position définit
    drawSnakeBody(snake)
    {
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }
}

export default Playground;