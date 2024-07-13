// computer play thatis randomly generated ech time called
    function computerplay() {
        let rock = "Rock";
        let paper = "Paper";
        let scissors = "Scissors";
        let getRandomValue = Math.random();
        if (getRandomValue <= 0.33) {
            return rock;
        } else if (getRandomValue <= 0.66) {
            return paper;
        } else {
            return scissors;
        }
    }
    
    //Game start
    function game() {
        let playerWin = 0;
        let computerWin = 0;
        let gameWinner = "";

        //Add Event Listeners
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            buttons.addEventListener('click', () => {
                playerSelection = button.className;
                const computerSelection = computerplay();
                battleWinText.textcontent = (playRound(playerSelection, computerSelection))
                player.WinText.textContent = "Player Win Totals: " + playerWin;
                computer.WinText.textContent = "Computer Win totals: " + computerWin;
            })
        })

            //play the round and determine winner
            function playRound(firstLetterCap, computerSelection) {
                let tie = "It's a Tie! You selected " + firstLetterCap + " and the computer selected " + computerSelection;
                let paperBeatRock = "You Win! You selected " + firstLetterCap + " and the computer selected " + computerSelection;
                let scissorsBeatPaperLoss = "You Lose! You selected " + firstLetterCap + " and the computer selected " + computerSelection;
                let paperBeatRockLoss = "You Lose! You selected " + firstLetterCap + " and the computer selected " + computerSelection;
                let rockBeatScissors = "You Win! You selected " + firstLetterCap + " and the computer selected " + computerSelection;
                let rockBeatScissorsLoss = "You Lose! You selected " + firstLetterCap + " and the computer selected " + computerSelection;
                let scissorsBeatPaper = "You Win! You selected " + firstLetterCap + " and the computer selected " + computerSelection;
    

                if (firstLetterCap === computerSelection) {
                    return tie;
                } else if ((firstLetterCap === "Paper") && (computerSelection === "Rock")) {
                    playerWin++;
                    return paperBeatRock;
                } else if ((firstLetterCap === "Paper") && (computerSelection === "Scissors")) {
                    computerWin++;
                    return scissorsBeatPaperLoss;
                } else if ((firstLetterCap === "Rock") && (computerSelection === "Paper")) {
                    computerWin++;
                    return paperBeatRockLoss;
                } else if ((firstLetterCap === "Rock") && (computerSelection === "Scissors")) {
                    playerWin++;
                    return rockBeatScissors;
                } else if ((firstLetterCap === "Scissors") && (computerSelection === "Rock")) {
                    computerWin++;
                    return rockBeatScissorsLoss;
                } else if ((firstLetterCap === "Scissors") && (computerSelection === "Rock")) {
                    computerWin++;
                    return scissorsBeatPaper;
                }
            }
        }

    // create div DOM for all results
    const container = document.querySelector("#container");
    const resultsDiv = document.createElement ("div");
    resultsDiv.style.marginTop = "20px";
    container.appendChild(resultsDiv);

    // create player win tracking DOM
    const playerWinText = document.createElement("p");
    playerWinText.style.color = "blue";
    playerWinText.textContent = "PLayer Win Totals: " + playerWin;
    resultsDiv.appendChild(playerWinText);

    // create computer win tracking DOM
    const computerWinText = document.createElement("p");
    computerWinText.style.color = "blue";
    computerWinText.textcontent = "Compueter Win Totals: " + computerWin;
    resultsDiv.appendChild(computerWinText);

    // create battle win text DOM
    const battleWinText = document.createElement("p");
    battleWinText.style.color = "black";
    resultsDiv.appendChild(battleWinText);

    // create game win text DOM
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "orange";
    gameWinText.textContent = gameWinner;
    resultsDiv.appendChild(gameWinText);

    // determine who won five points first
    function endGame() {
        if (playerWin == 5) {
            gameWinner = "YOU WIN!";
            gameWinText.textContent = gameWinner;

            // disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            // create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            // if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
            })
        } else if (computerWin == 5) {
            gameWinner = "COMPUTER WINS!!";
            gameWinText.textContent = gameWinner;

            // disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            // create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            // if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
            })
        }
    }



