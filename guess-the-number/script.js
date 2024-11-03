'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click',function() {
    
    const guess = Number(document.querySelector('.guess').value);
    let score =  Number(document.querySelector('.score').textContent);
    
    if (score !== 0)
    {
        if(!guess)
        {
            document.querySelector('.message').textContent = '⛔ No number!';
        }

        else if (guess === secretNumber)
        {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if(score > Number(document.querySelector('.highscore').textContent))
            {
                document.querySelector('.highscore').textContent = score;
            }
        }

        else if (guess > secretNumber)
        {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
        
        }

        else if (guess < secretNumber)
        {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
        }

        document.querySelector('.score').textContent = score;
    }


    if (score === 0)
    {
        document.querySelector('.message').textContent = '💥 You lost the game!';
    }

});

document.querySelector('.again').addEventListener('click',function() {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});