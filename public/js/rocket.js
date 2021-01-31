let acceleration = 1000;
let starSpeed = 500;
let gameStatus = '';
anime({
    targets: '.star1',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});
anime({
    targets: '.star2',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});
anime({
    targets: '.star3',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});
anime({
    targets: '.star4',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});
anime({
    targets: '.star5',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});
anime({
    targets: '.star6',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});
anime({
    targets: '.star7',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});
anime({
    targets: '.star8',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});
anime({
    targets: '.star9',
    top: '100%',
    easing: 'linear',
    opacity: Math.floor(Math.random()* 0.9),
    duration: Math.floor(Math.random() * 2000) + starSpeed,
    loop:true
});




var main = $('#main');
main.mousemove(function (e){
    let valX = (e.pageX);
    let rocket = document.getElementById("rocket");
    rocket.style.left = `${valX}px`;
});

let score = 0;
function dropStone(){

        const div = document.createElement('div');
        div.classList = 'stone';
        const stoneClass = `${Math.floor(Math.random() * 100)}stone`;
        div.classList.add(`${stoneClass}`);
        div.style.left = `${Math.floor(Math.random() * 99)}%`;
        const stoneSize = Math.floor(Math.random() * 50) + 50;
        div.style.width = `${stoneSize}px`;
        div.style.height = `${stoneSize}px`;
        document.getElementById('main').appendChild(div);
        const rocket = document.getElementById('rocket');
        anime({
            targets: div,
            top: '100%',
            easing: 'linear',
            duration: '2000',
            update: function checkCollision(){
                isCollapsed(rocket, div);
            },
            changeComplete: function deleteStone(){
                score = score + 1;
                if(score == 100){
                    document.body.style.backgroundColor = 'none';

                    document.body.style.backgroundImage = 'url("/rocketBackground1.png")';
                    document.body.style.backgroundSize = '100%';
                }
                if(score == 700){
                    document.body.style.backgroundImage = 'url("/rocketBackground2.png")'
                }
                if(score == 1300){
                    document.body.style.backgroundImage = 'url("/rocketBackground3.png")'
                }
                if(score == 2000){
                    document.body.style.backgroundImage = 'url("/rocketBackground4.png")'
                }

                document.querySelector('.score').innerHTML = `Score: ${score}`;
                div.remove();
            }
        })
        setTimeout(() => {
            if(acceleration >= 200){
                acceleration = acceleration - 2;
                starSpeed = starSpeed - 2;
  
            }else{
                acceleration = 200;
            }
        
        if(gameStatus === 'running'){
            dropStone();

        }
            console.log(acceleration);
        }, acceleration);

    
}

function isCollapsed(roc, sto){
    
    var rocket = roc.getBoundingClientRect();
    var stone = sto.getBoundingClientRect();
    
    if (rocket.left +20 < stone.left + stone.width/2  && rocket.left + 20 + rocket.width/2 -20  > stone.left &&
          rocket.top +20 < stone.top + stone.height/2 && rocket.top +20 + rocket.height/2 > stone.top) {
        gameStatus = 'crashed';
        document.getElementById('playing').pause();
        document.getElementById('menuSound').play();
        document.getElementById('gameEnd').play();
        anime({
                targets: '.gameOverMenu',
                width: '250px',
                update: function(){
                    document.getElementById('gameOverScore').innerHTML = `${score}`;
                }
            });
    }

  }
// dropStone();
setTimeout(() => {
    document.getElementById('menuSound').muted = false;
    document.getElementById('menuSound').play();
}, 5000);

document.querySelector('.startGame').addEventListener('mouseover', ()=>{
    document.getElementById('buttonSound').play();
})
document.querySelector('.restartButton').addEventListener('mouseover', ()=>{
    document.getElementById('buttonSound').play();
})
document.querySelector('.startGame').addEventListener('click', ()=>{
    anime({
        targets: '.menu',
        top:'100%',
        duration: 1000,
        easing: 'easeInOutQuad',
        changeComplete: function (){
            document.getElementById('menuSound').pause();
            document.getElementById('playing').play();
            setTimeout(() => {
                gameStatus = 'running';
                dropStone();
            }, 3000);
            anime({
                targets: '.rocket',
                bottom: '10px',
                easing: 'easeInOutQuad',
            });


        }
    });
    anime({
        targets: '.rocket-title',
        translateY: '100%',
        duration: 500,
        easing: 'easeInOutQuad',

    });
    anime({
        targets: '.startGame',
        width: '0px',
        duration: 500,
        easing: 'easeInOutQuad',

    });
    anime({
        targets: '.rocketImg',
        translateY: '100%',
        duration: 800,
        easing: 'easeInOutQuad',

    });



});
document.querySelector('.restartButton').addEventListener('click', ()=>{
    restartGame();
});
function restartGame(){
    acceleration = 1000;
    starSpeed = 500;
    gameStatus = 'running';
    score = 0;
    anime({
        targets: '.gameOverMenu',
        width: '0px',
        duration: 100,
        changeComplete: function(){
            document.getElementById('menuSound').pause();
            document.getElementById('playing').play();
            document.body.style.backgroundColor = 'black';
            document.body.style.backgroundImage = 'none';
            document.querySelector('.score').innerHTML = `Score: ${score}`;
            setTimeout(() => {
                gameStatus = 'running';
                dropStone();
            }, 3000);
        }
        
    });


}