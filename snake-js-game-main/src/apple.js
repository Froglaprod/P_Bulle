class Apple{
    constructor()
    {
    }

    //Donne des coordonnées aléatoire a notre pomme
    randomPosition(gridSize, applePosition)
    {
        applePosition.x = Math.floor(Math.random() * 20) * gridSize ;
        applePosition.y = Math.floor(Math.random() * 20)  * gridSize;
        
        return applePosition;
    }
}
export default Apple;