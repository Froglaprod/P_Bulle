export class Playground{

     //On définit le context de dessin pour nos affichage
     constructor(canvas)
     {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
     }

    // Dessine le serpent à une position définit
    drawSnake()
    {
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(380, 380, 60, 60);
    }
}

export default Playground;