 class Snake{

    //On donne les valeurs par défault de notre snake
    constructor(width, height)
    {
      this.width = width;
      this.height = height;
    }

    moveSnake(headSnake, direction, snake)
    {

   //Déplacement en fonction de la direction accorder
switch (direction) {

   case 'Up':
      headSnake.y--;
     break;
  
   case 'Down':
      headSnake.y++;
     break;
  
   case 'Left':
      headSnake.x--;
     break;
  
   case 'Right':      
   headSnake.x++;
     break;
  }
  //Ajoute une nouvelle partie au début du tableau
  snake.unshift(headSnake);
 //Supprime la dernier partie du tableau
  snake.pop();

    }

   
    
}

export default Snake;