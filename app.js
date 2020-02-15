var scores, roundScore, activePlayer, dice, gamePlaying;

init();
document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gamePlaying){

    //1. randomnumber
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. DIsplay the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    if(dice !== 1) {
      // addscore
      roundScore += dice;
      document.getElementById('current-'+activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gamePlaying){
    //  add Current score to GLOBLE scores
    scores[activePlayer] += roundScore;

    //Updatae theUI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    //check if the player win the Game
    if(scores[activePlayer] >=50){
      document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      gamePlaying = false;
    } else{

      //nextPlayer
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //Next player
  activePlayer === 0?activePlayer = 1:activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
  if(activePlayer === 1){
    document.querySelector('.dice').style.left = "75%";
    document.querySelector('.btn-roll').style.left = "75%";
    document.querySelector('.btn-hold').style.left = "75%";
  } else{
    document.querySelector('.dice').style.left ="25%";
    document.querySelector('.btn-roll').style.left = "25%";
    document.querySelector('.btn-hold').style.left = "25%";
  }
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
  scores = [0,0];
  roundScore =  0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  document.querySelector('.btn-roll').style.left = "25%";
  document.querySelector('.btn-hold').style.left = "25%";


}
//MDN site to learn event listner



//document.querySelector('#score-0').textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice +'</em>'
//var x = document.querySelector(#score-0).textContent;
