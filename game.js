let player = document.getElementById('player');
let obstacle = document.getElementById('obstacle');
let scoreBoard = document.getElementById('score');
let body = document.querySelector('body');
let title = document.getElementById('title');
let wasted = document.querySelector('.wasted');
var checkJumpStatus = false;
var score = 0;
var uDead = false;
var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

if (obstacle.classList != 'speed1'){
    obstacle.classList.add('speed1');
}



function playerJump() {
    obstacleLeft =parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    console.log(obstacleLeft)
    if (obstacleLeft<500){
        score ++;
        scoreBoard.textContent = score;
    }
    if (uDead == true) {
        score = 0;
        scoreBoard.textContent = score;
        wasted.classList.remove('loose');
        obstacle.classList.add('speed1');
        uDead = false;
        title.textContent = 'Run & Jump & Chill';
    }
    if (checkJumpStatus == false){
        checkJumpStatus = true;
        if (player.classList != 'playerJump'){
            player.classList.add('playerJump');
        }
        setTimeout(function(){
                player.classList.remove('playerJump');
                checkJumpStatus = false;
            },900)
    }
}

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        playerJump()
        if (uDead == true) {
            obstacle.classList.add('speed1');
            uDead = false;
            score = 0;
            console.log()
        }
    }
  }

var checkDead = setInterval(function(){
    var playerTop =parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    obstacleLeft =parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (uDead == false) {
        if(obstacleLeft<130  &&obstacleLeft>100&& playerTop>= 250){
            obstacle.classList.remove('speed1');
            wasted.classList.add('loose');
            uDead = true;
            title.textContent = 'U Loose, you can restart with a click or pressing "enter"'
        }
    }
},10);

player.addEventListener('animationend', () => {
    console.log('Animation ended');
  });
