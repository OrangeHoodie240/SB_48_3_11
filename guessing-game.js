function guessingGame() {
    let random = Math.floor(Math.random() * 100);
    let hasWon = false; 
    let guessCount = 0; 
    return guess => {
        if(hasWon){
            return 'The game is over, you already won!'; 
        }
        else{
            guessCount++; 
        }

        if (guess === random){
            hasWon = true; 
            return 'You win! You found ' + random + ' in ' + guessCount  + ' guesses.'; 
        }
        else if(guess > random){
            return guess + ' is too high!';
        }
        else if(guess < random){
            return guess + ' is too low!';
        }
    };
}



module.exports = { guessingGame };
