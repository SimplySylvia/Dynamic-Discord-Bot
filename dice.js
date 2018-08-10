function Dice(numSides){
    // all properties of dice go here
    this.numSides = numSides;
}

// prototype that stores static methods
Dice.prototype = {
    // all methods of dice go here
    roll: function(){
        return Math.floor(Math.random() * this.numSides) + 1;  
    }
}

// Class/Object method that will return an array of Dice objects
// Note: does not need a specific object
Dice.createCupOfDice = function(quantity, numSides){
    var cupOfDice = [];
    for(let i = 0; i < quantity; i++ ){
        cupOfDice.push( new Dice(numSides) );
    }
    return cupOfDice;
}

// Class/Object method that will total a cup of dice thrown
// Note: does not need a specific object to be called.
Dice.rollCup = function(quantity, numSides){
    let total = Dice
        .createCupOfDice(quantity, numSides)
        .reduce( (accum, current) => ( accum + current.roll() ), 0 );
    console.log(total)

}

// Roll 2 dice and return total with Class method calls
Dice.rollCup(2,6);

// Roll 2 dice and return total with static method calls.
let myLittleDice = new Dice(6);
console.log(myLittleDice.roll()+ myLittleDice.roll());
