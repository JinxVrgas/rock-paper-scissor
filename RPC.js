


        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };
        updateScore();
        function RPS() {
            randomnumber = Math.random();
            let compMove = '';
            if (randomnumber >= 0 && randomnumber < 1 / 3) {
                compMove = 'rock';
            } else if (randomnumber > 1 / 3 && randomnumber < 2 / 3) {
                compMove = 'paper';
            } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
                compMove = 'scissor';
            }
            return compMove

        }

        function rock_paper_scissor(playermove) {
            const compMove = RPS();
            let result = '';

            if (playermove === 'rock') {
                if (compMove === 'rock') {
                    result = 'tie';
                    score.ties++;
                } else if (compMove === 'paper') {
                    result = 'You Lose';
                    score.losses++;
                }
                else if (compMove === 'scissor') {
                    result = 'You Win';
                    score.wins++;
                }
            }
            else if (playermove === 'paper') {
                if (compMove === 'paper') {
                    result = 'tie';
                    score.ties++;
                } else if (compMove === 'scissor') {
                    result = 'You Lose';
                    score.losses++;
                }
                else if (compMove === 'rock') {
                    result = 'You Win';
                    score.wins++;
                }
            }
            else if (playermove === 'scissor') {
                if (compMove === 'scissor') {
                    result = 'tie';
                    score.ties++;
                } else if (compMove === 'rock') {
                    result = 'You Lose';
                    score.losses++;
                }
                else if (compMove === 'paper') {
                    result = 'You Win';
                    score.wins++;
                }
            }
            updateScore();
            document.querySelector('.res').innerHTML = result;
            document.querySelector('.moves').innerHTML = `You
        <img src = "${playermove}.png" class="rpc-icon">
        <img src = "${compMove}.png" class="rpc-icon">
        computer`;
            
            localStorage.setItem('score', JSON.stringify(score));





        }
        function updateScore(){
            document.querySelector('.score')
                .innerHTML =
                `Wins: ${score.wins},
        Losses: ${score.losses}, 
        Ties: ${score.ties}`;
        }
    