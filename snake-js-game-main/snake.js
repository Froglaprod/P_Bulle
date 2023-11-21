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

  
  // Boucle qui parcours chaque partie du corps du snake sauf la tete
for (let i = snake.length - 1; i > 0; i--) 
{
   // On sauvegarde la position de chaque partie du corps
  const updatePosition = { x: snake[i].x, y: snake[i].y };

  // On déplace chaque partie du corps à la position de la partie précédente
  snake[i].x = snake[i - 1].x;
  snake[i].y = snake[i - 1].y;
  // On met a jour les partie précédente part la position de base du corps
  snake[i - 1].x = updatePosition.x;
  snake[i - 1].y = updatePosition.y;
}

// On remetla postion de la tete à sa position actuel
snake[0].x = positionHead.x;
snake[0].y = positionHead.y;
  }
  
  // Vérifie si la tete du snake touche la bordure du terrain
  toucheBorder(headSnake, canvas) 
  {
    //On vérifie la position de la tete du snake par apport a la position de la bordure
    if (headSnake.x < 0 || headSnake.y < 0 || headSnake.x >= canvas.width || headSnake.y >= canvas.height) 
    {
      return true;
    }
    return false;
  }
  
}

export default Snake;