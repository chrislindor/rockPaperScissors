/*
Rock Paper Scissors game
*/

var gameOptions = [ 'rock', 'paper', 'sissors'];
var player = '',
    computer,
    validEntry = false;

//Print function 
function print(message, id) {
    var outputDiv = document.getElementById(id);
    outputDiv.innerHTML = message;
}
//Random number function
function randomNumber(number) {
    return Math.round(Math.random() * number);
}


//propmt user for valid entry;
while (!validEntry) {
    player = prompt('Enter "rock", "paper", or "sissors" to play').toLowerCase();
    var x;
    for (x = 0; x < gameOptions.length; x += 1) {
        if (player === gameOptions[x]) {
            validEntry = true;
        }
    }
    if (!validEntry) {
        print(player + ' is not a valid entry please enter ' + gameOptions.join(', '), 'main');
    }
}
//calulating random computer choice
computer = gameOptions[randomNumber(2)];
console.log(player, computer);

//message to print when player wins
function playerWin() {
    var message = '<p>' + player + ' VS. ' + computer + '</p>';
    message += '<p> YOU WIN!!!</p>';
    message += '<p><a href="index.html">Try Again</a></p>';
    return message;
}
//message to print when player losses
function playerLose() {
    var message = '<p>' + player + ' VS. ' + computer + '</p>';
    message += '<p> COMPUTER WINS!!!</p>';
    message += '<p><a href="index.html">Try Again</a></p>';
    return message;
}
//player tie
function tie() {
    var message = '<p>' + player + ' VS. ' + computer + '</p>';
    message += '<p> ITS A TIE!!!</p>';
    message += '<p><a href="index.html">Try Again</a></p>';
    return message;
}
//conditional statments to check who win
if (player === computer) {
    print(tie(), "main");
} else if (player === gameOptions[0] && computer === gameOptions[1]) {
    print(playerLose(), "main");
} else if (player === gameOptions[0] && computer === gameOptions[2]) {
    print(playerWin(), "main");
} else if (player === gameOptions[1] && computer === gameOptions[2]) {
    print(playerLose(), "main");
} else if (player === gameOptions[1] && computer === gameOptions[0]) {
    print(playerWin(), "main");
} else if (player === gameOptions[2] && computer === gameOptions[0]) {
    print(playerLose(), "main");
} else if (player === gameOptions[2] && computer === gameOptions[1]) {
    print(playerWin(), "main");
}

