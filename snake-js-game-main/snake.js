 class Snake{

    //On donne les valeurs par défault de notre snake
    constructor(x, y, width, height, direction)
    {
        //Postion x 
        this.x = x;
        //Postion y
        this.y = y;
        //Largeur
        this.width = width;
        //Hauteur
        this.height = height;
        //Direction
        this.direction = direction;
    }

    //On se décale à droite
    moveLeft()
    {
       this.x-= 40;
    }

     //On se décale à droite
     moveRight()
     {
        this.x+= 40;
     }

      //On se décale en bas
      moveDown()
      {
         this.y+= 40;
  
      }

       //On se décale en haut
     moveUp()
     {
        this.y-= 40;
     }
 

}

export default Snake;