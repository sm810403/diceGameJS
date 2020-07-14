var activePlayer, bigScore, smallScore,dice1,dice2,isPlaying;
activePlayer = 0;
bigScore = 0;
smallScore = 0;
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
    // document.querySelector('.player-panel-0').classList.add = 'act';
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    document.querySelector('.dice1').style.display = 'block';
    document.querySelector('.dice2').style.display = 'block';
    document.querySelector('.dice1').src = 'dices/dice-'+dice1+'.jpg';
    document.querySelector('.dice2').src = 'dices/dice-'+dice2+'.jpg';
    //update UI
    
    //condition(if num 1 is picked, then next player's turn)
    if (dice1 !== dice2) {
        smallScore += dice1 + dice2;
        document.querySelector('.current-score-'+ activePlayer).textContent = smallScore;
        
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
    bigScore += smallScore;
    //transfer smallScore to bigScore
    document.querySelector('.sum-score-'+activePlayer).textContent = bigScore;
    //nextPlayer
    nextPlayer();
    //winner!
    if (bigScore >= 100) {
        //player who get 100 score points is winner.
        var win = 'Winner!'
        document.querySelector('.player-'+activePlayer).innerHTML = '<h3>'+win+'</h3>';
        isPlaying = false;
    } 
    
}
})

function nextPlayer(){
    activePlayer === 0? activePlayer = 1:activePlayer = 0;
        // document.querySelector('.dice1').style.display = 'none';
        // document.querySelector('.dice2').style.display = 'none';
        // smallScore = 0;
        smallScore = 0;
        document.querySelector('.current-score-0').textContent = smallScore;
        document.querySelector('.current-score-1').textContent = smallScore;
        document.querySelector('.player-panel-0').classList.toggle('active');
        document.querySelector('.player-panel-1').classList.toggle('active');
}