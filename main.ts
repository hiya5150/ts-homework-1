//The Game class
class Game {
    //The constructor
    constructor(public name: string, public rating: number) { }
    
    //A function that returns the HTML object you need
    createListNode() :HTMLElement {
        //Create the nodes we'll need
        let newRow = document.createElement("tr");
        let nameCell = document.createElement("td");
        let rateCell = document.createElement("td");
        let nameText = document.createTextNode(this.name);
        let rateText = document.createTextNode(this.rating.toString());
<<<<<<< HEAD

        document.getElementById("games").appendChild(newRow);
        document.getElementById("games").appendChild(nameCell).appendChild(nameText);
        document.getElementById("games").appendChild(rateCell).appendChild(rateText);
=======
>>>>>>> 1698617b2532f5fe8c0dbb8aee22765873b35b62
        
        //Add the text
        nameCell.appendChild(nameText);
        rateCell.appendChild(rateText);
        
        //Add cells to row
        newRow.appendChild(nameCell);
        newRow.appendChild(rateCell);

        //Return the row
        return newRow;
    }
}

//Declare the varible to store the game.
let newGame: Game;

//The function that adds the game
function addGame() :void {
    // @ts-ignore
    newGame = new Game(document.getElementById("name").value,document.getElementById("rating").value);
    newGame.createListNode();
}

