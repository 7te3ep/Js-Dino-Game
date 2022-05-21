let character=document.querySelector('.char');
let body=document.querySelector('body');
let block=document.querySelector('.block');
var checkJump = false;
function jump() {
    if (checkJump == false){
        checkJump = true;
        if (character.classList != 'animate'){
            character.classList.add('animate');
        }
        setTimeout(function(){
                character.classList.remove('animate');
                checkJump = false;
            },800)
    }
}
var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<25 && blockLeft>0 && characterTop>=130){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('u loose')
    }
},10);

