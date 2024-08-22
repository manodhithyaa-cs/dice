/*
GAME RULES:

* The game has 2 players, playing in rounds
* In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
* BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
* The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
* The first player to reach 100 points on GLOBAL score wins the game

*/

/*******************************

    * Declaration of variables *

*******************************/
var scores , roundScore , activePlayer , dice1 , dice2 ;
var input;

/************************************

    * assigning values to variables *

************************************/
scores = [ 0 , 0 ];
roundScore = 0;
activePlayer = 0;
dice1 = Math.floor( Math.random() * 6 ) + 1;
dice2 = Math.floor( Math.random() * 6 ) + 1;

/******************************

    * calling function init() *

******************************/
init();

/******************************

    * Declaration of function *

******************************/
function nextPlayer()
{
    // check active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    // roundScore to zero
    roundScore = 0;
    
    // display zero in current score output for next player
    document.querySelector( '#current-0' ).textContent = '0';
    document.querySelector( '#current-1' ).textContent = '0';
    
    // toggle class active
    document.querySelector( '.player-0-panel' ).classList.toggle( 'active' );
    document.querySelector( '.player-1-panel' ).classList.toggle( 'active' );
}

/******************************

    * Declaration of function *

******************************/
function init()
{
    // assigning values as zero to variables
    scores = [ 0 , 0 ];
    roundScore = 0;
    activePlayer = 0;
    
    // add class active
    document.querySelector( '.player-0-panel' ).classList.add( 'active' );
    
    // remove class active
    document.querySelector( '.player-1-panel' ).classList.remove( 'active' );
    
    // set current player Score to zero
    document.querySelector( '#current-' + activePlayer ).textContent = '0';
    
    // hide dice
    document.querySelector( '#dice-1' ).style.display = 'none';
    document.querySelector( '#dice-2' ).style.display = 'none';
    
    // set score to zero    
    document.querySelector( '#score-0' ).textContent = '0';
    document.querySelector( '#score-1' ).textContent = '0';
    
    // show roll button
    document.querySelector( '.btn-roll' ).style.visibility = 'visible';
        
    // show hold button
    document.querySelector( '.btn-hold' ).style.visibility = 'visible';
    
    // display player name
    document.querySelector( '#name-0' ).textContent = 'Player 1';
    document.querySelector( '#name-1' ).textContent = 'Player 2';
}

/******************************

    * Declaration of function *

******************************/
document.querySelector( '.btn-new' ).addEventListener( 'click' , function(){
    // calling function init()
    init();
});

/******************************

    * Declaration of function *

******************************/
document.querySelector( '.btn-roll' ).addEventListener( 'click' , function(){
    // dice value
    dice1 = Math.floor( Math.random() * 6 ) + 1;
    dice2 = Math.floor( Math.random() * 6 ) + 1;
        
    // console output
    console.log( 'dice1\t' + dice1 );
    console.log( 'dice2\t' + dice2 );
    
    // display dice
    document.querySelector( '#dice-1' ).style.display = 'none';
    document.querySelector( '#dice-2' ).style.display = 'none';
    
    // condition
    if ( dice1 !== 1 && dice2 !== 1 )
    {
        // styling dice
        document.querySelector( '#dice-1' ).style.display = 'block';
        document.querySelector( '#dice-2' ).style.display = 'block';
        document.querySelector( '#dice-1' ).src = 'dice-' + dice1 + '.png';
        document.querySelector( '#dice-2' ).src = 'dice-' + dice2 + '.png';
            
        // add round score
        roundScore += dice1 + dice2;

        // display roundScore
        document.querySelector( '#current-' + activePlayer ).textContent = roundScore;
    }

    
    // next player
    else
    {
        // next player
        nextPlayer();
    }
});

/******************************

    * Declaration of function *

******************************/
document.querySelector( '.btn-hold' ).addEventListener( 'click' , function(){
    // adding score
    scores[activePlayer] += roundScore;
    
    // display SCORE
    document.querySelector( '#score-' + activePlayer ).textContent = scores[activePlayer];
    
    // check who is winner
    if ( scores[activePlayer] >= input )
    {
        // display winner
        document.querySelector( '#name-' + activePlayer ).textContent = 'winner!';
        
        // hides dice
        document.querySelector( '#dice-1' ).style.display = 'hidden';
        document.querySelector( '#dice-2' ).style.display = 'hidden';
    
        // hides roll button
        document.querySelector( '.btn-roll' ).style.visibility = 'hidden';
        
        // hides hold button
        document.querySelector( '.btn-hold' ).style.visibility = 'hidden';
        
        // remove active class
        document.querySelector( '.player-0-panel' ).classList.remove( 'active' );
        document.querySelector( '.player-1-panel' ).classList.remove( 'active' );
    }
    
    // calling function next player
    else
    {
        nextPlayer(); // next player turn
    }
});

/******************************

    * Declaration of function *

******************************/
function othername() {
    input = document.getElementById("userInput").value;
    alert( 'score you entered is ' + input );
    
}