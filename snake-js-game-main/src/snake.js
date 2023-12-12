class Snake {

  //On donne les valeurs par défault de notre snake
  constructor(numBody, speed) {
    this.speed = speed;
    this.numBody = numBody;
  }

  // Déplacement du snake
  moveSnake(headSnake, direction, snake, gridSize) {
    //On stock la position de la tete du snake
    const positionHead = { x: headSnake.x, y: headSnake.y };

    //On déplace la tete du snake en fonction de la direction
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
    for (let i = snake.length - 1; i > 0; i--) {
      // On sauvegarde la position de chaque partie du corps
      const updatePosition = { x: snake[i].x, y: snake[i].y };

      // On déplace chaque partie du corps à la position de la partie précédente
      snake[i].x = snake[i - 1].x;
      snake[i].y = snake[i - 1].y;
    }

    // On remet la postion de la tete à sa position actuel
    snake[0].x = positionHead.x;
    snake[0].y = positionHead.y;
  }

  // Vérifie si la tete du snake touche la bordure du terrain
  toucheBorder(headSnake, canvas) {
    //On vérifie la position de la tete du snake par apport a la position de la bordure
    if (headSnake.x < 0 || headSnake.y < 0 || headSnake.x >= canvas.width || headSnake.y >= canvas.height) {
      return true;
    }
    return false;
  }

  // Vérifie si la tete du snake touche une partie de son corps
  toucheBody(headSnake, snake) {
    //Boucle qui parcours chaque partie du corps
    for (let i = 0; i < snake.length; i++) {
      //On vérifie la position de chaque partie du corps par apport a la tete
      if (headSnake.x == snake[i].x && headSnake.y == snake[i].y) {
        return true;
      }
    }
    return false;
  }

  // Vérifie si la tete du snake mange la pomme
  eatApple(applePosition, headSnake, snake) {
    //On vérifie si la position de la tete est égal a la postion de la pomme
    if (headSnake.x == applePosition.x && headSnake.y === applePosition.y) {
      //Ajout d'une nouvelle partie au corps du snake
      snake.push({ x: headSnake.x, y: headSnake.y });
      //Augmente le score
      return true;

    }
    return false;
  }

  // Vérifie si la tete du snake mange la pomme
  updateScore(applePosition, headSnake, scoreGame) {
    //On vérifie si la position de la tete est égal a la postion de la pomme
    if (headSnake.x == applePosition.x && headSnake.y === applePosition.y) {
      //Augmente le score
      scoreGame += 1;
    }
    return scoreGame;
  }
}

export default Snake;