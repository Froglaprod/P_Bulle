 class Snake{

    //On donne les valeurs par défault de notre snake
    constructor(width, height)
    {
      this.width = width;
      this.height = height;
    }
 
    moveSnake(headSnake, direction, snake, gridSize)
    {
      //On stocke la position de la tete du snake
      const positionHead = { x: headSnake.x, y: headSnake.y };
    
      switch (direction) {
        case 'Up':
          headSnake.y -= gridSize;
          break;
        case 'Down':
          headSnake.y += gridSize;
          break;
        case 'Left':
          headSnake.x -= gridSize;
          break;
        case 'Right':
          headSnake.x += gridSize;
          break;
      }

      
  for (let i = snake.length - 1; i > 0; i--) 
  {
    //On donne a chaque partie du corps la position de la partie du corps qui la précède
    const updatePosition = { x: snake[i].x, y: snake[i].y };
    
    snake[i].x = snake[i - 1].x;
    snake[i].y = snake[i - 1].y;
    snake[i - 1].x = updatePosition.x;
    snake[i - 1].y = updatePosition.y;
  }

  //On donne a chaque partie du corps la position de la tete du snake
  snake[0].x = positionHead.x;
  snake[0].y = positionHead.y;
    }
    
}

export default Snake;