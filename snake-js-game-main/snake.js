 class Snake{

    //On donne les valeurs par défault de notre snake
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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