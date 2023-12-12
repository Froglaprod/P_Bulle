///ETML
///Auteur : Mathis Botteau
///Date   : 12.12.2023
///Description : Le but de ce projet est de creer le fameux jeux snake
///

/// La classe Apple contient tout les actions de la pomme, ainsi que ces caractéristiques
class Apple {
    constructor() {
    }

    //Donne des coordonnées aléatoire a notre pomme
    randomPosition(gridSize, applePosition) {
        applePosition.x = Math.floor(Math.random() * 20) * gridSize;
        applePosition.y = Math.floor(Math.random() * 20) * gridSize;

        return applePosition;
    }
}
export default Apple;