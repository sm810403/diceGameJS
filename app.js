var activePlayer, bigScore, smallScore,dice1,dice2,isPlaying;
activePlayer = 0;
bigScore = [0,0];
smallScore = [0,0];
dice1;
dice2;
isPlaying = true;

//button
const rollBtn = document.querySelector('.roll');
const holdBtn = document.querySelector('.hold');

document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

rollBtn.addEventListener('click', function(){
   if (isPlaying){
    //roll dice(random num)
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    //show dices
    document.querySelector('.dice1').style.display = 'block';
    document.querySelector('.dice2').style.display = 'block';
    document.querySelector('.player-panel-'+activePlayer).classList.add('active');
    //update UI
    document.querySelector('.dice1').src = 'dices/dice-'+dice1+'.jpg';
    document.querySelector('.dice2').src = 'dices/dice-'+dice2+'.jpg';
    document.querySelector('.dice1').classList.toggle('scal');
    document.querySelector('.dice2').classList.toggle('scal');
    //condition(if both dices have same numbers, then next player plays)
    if (dice1 !== dice2) {
        smallScore[activePlayer] += (dice1 + dice2);
        document.querySelector('.current-score-'+ activePlayer).textContent = smallScore[activePlayer];
    } else {
        //next player
        // .active score0 activePlayer
        nextPlayer();
    } 
   }
})

holdBtn.addEventListener('click', function(){
    if (isPlaying){
    //get value from smallScore
    //update score
    bigScore[activePlayer] +=smallScore[activePlayer];
    //transfer smallScore to bigScore
    document.querySelector('.sum-score-'+activePlayer).textContent = bigScore[activePlayer];
    
    //winner!
    if (bigScore[activePlayer] >= 100) {
        //player who get 100 score points is winner.
        var win = 'Winner!'
        document.querySelector('.player-'+activePlayer).innerHTML = '<h3>'+win+'</h3>';
        isPlaying = false;
    } else {
    //nextPlayer
    nextPlayer();
    };
}
})

function nextPlayer(){
    activePlayer === 0? activePlayer = 1:activePlayer = 0;
        // document.querySelector('.dice1').style.display = 'none';
        // document.querySelector('.dice2').style.display = 'none';
        // smallScore = 0;
        smallScore[activePlayer] = 0;
        document.querySelector('.current-score-0').textContent = smallScore[activePlayer];
        document.querySelector('.current-score-1').textContent = smallScore[activePlayer];
        document.querySelector('.player-panel-0').classList.toggle('active');
        document.querySelector('.player-panel-1').classList.toggle('active');
}

//new game 
document.querySelector('.newGame').addEventListener('click', function(){
    //default all things
    //score 0, css none, dices none,...
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    bigScore= [0,0];
    smallScore= [0,0];
    // if (activePlayer===1) return activePlayer = 0;
    document.querySelector('.current-score-0').textContent = smallScore[activePlayer];
    document.querySelector('.current-score-1').textContent = smallScore[activePlayer];
    document.querySelector('.sum-score-0').textContent = bigScore[activePlayer];
    document.querySelector('.sum-score-1').textContent = bigScore[activePlayer];
    document.querySelector('.player-panel-0').classList.remove('active');
    document.querySelector('.player-panel-1').classList.remove('active');
    
})