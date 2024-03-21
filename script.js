let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    losses: 0,
    ties: 0
};
updateScoreElement();

// document.querySelector('.js-moves')
//     .innerHTML =`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;


function autoPlay() {
    let intervalId;
    let isautoplaying = false;

    if (!isautoplaying) {
        intervalId = setInterval(()=> {
            const playerMove = createsRandom();
            playerGame(playerMove);
        },1000);
        isautoplaying = true;
    }
     else {
        clearInterval(intervalId);
        isautoplaying = false;
        updateScoreElement();
    }
}

document.querySelector('.js-rock-btn')
.addEventListener('click',()=>{
       playerGame('Rock'); 
});

document.querySelector('.js-paper-btn')
.addEventListener('click', ()=>{
    playerGame('Paper'); 
});

document.querySelector('.js-scisores-btn')
.addEventListener('click', ()=>{
    playerGame('Scissores'); 
});


document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playerGame('Rock');
    }else if(event.key === 'p'){
        playerGame('Paper'); 
    }else if (event.key === 's'){
        playerGame('Scissors');
    }
});

function playerGame(playerMove) {
    const computerMove = createsRandom();
    let result = '';
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose.'

        }
        else if (computerMove === 'Paper') {
            result = 'You win.';

        }
        else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }
    }
    else if (playerMove === 'Paper') {
        if (computerMove == 'Rock') {
            result = 'You win.'
        }
        else if (computerMove == 'Paper') {
            result = 'Tie.';

        }
        else if (computerMove == 'Scissors') {
            result = 'You lose.';

        }
    }
    else if (playerMove === 'Rock') {
        if (computerMove == 'Rock') {
            result = 'Tie.'
        }
        else if (computerMove == 'Paper') {
            result = 'You lose.';
        }
        else if (computerMove == 'Scissors') {
            result = 'You win.';
        }
    }
    if (result === 'You win.') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You : ${playerMove} ,  Computer : ${computerMove}`;
}
function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function createsRandom() {
    const randomNumber = Math.random();
    let computerMove ='';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = ('Rock');
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = ('Paper');
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = ('Scissors');
    }
    return computerMove;

}





