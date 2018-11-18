function introScreenAppears() {
    var introScreen = document.querySelector('.introScreen');
    var highScoreDiv = document.querySelector(".hot_key")
    var highScore = localStorage.highScore ? localStorage.getItem('highScore') : 0
    introScreen.style.display = 'flex';
    basket.style.left = (0.95*(board.clientWidth) / 2) + "px";
    highScoreDiv.innerHTML = "HIGHSCORE: " + highScore;
}

function endScreenAppears() {
    var endScreen = document.querySelector('.endScreen');
    endScreen.style.display = 'flex';
}

function stopGame() {
    clearInterval(id);
    checkHighScore();
    var items = document.querySelectorAll('.item');
        items.forEach(function (item) {
        item.remove()
    });
    endScreenAppears();
    var endScore = document.querySelector('.endScore');
    endScore.innerText = "Your score: " + score;
}

function resetScoreAndLife() {
    life = 3
    document.querySelector('.life').innerHTML = 'LIFE: ' + life;
    score = 0
    document.querySelector('.score').innerHTML =  'SCORE: ' + score;
}

introScreenAppears()

function handleButtonClick(event){
    if (event.target.classList.contains('button')) {
        var introScreen = document.querySelector('.introScreen');
        var endScreen = document.querySelector('.endScreen');
        introScreen.style.display = 'none';
        endScreen.style.display = 'none';
        resetScoreAndLife();
        play();
    }
}

window.addEventListener('click', handleButtonClick)
window.addEventListener('touchstart', handleButtonClick)
