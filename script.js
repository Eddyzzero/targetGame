// selectioner les elements HTML
let container = document.querySelector('.container');
let btn = document.querySelector('.start-button');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

btn.onclick = function () {
    let score = 0;
    let time = 1;
    container.innerHTML = "";


    // cette funtion cree un interval pour la cible
    let interval = setInterval(function showTarget(){
    let target = document.createElement('img');
    target.id = "target";
    target.src = "/assets/img/lepen.png";
    container.appendChild(target);
    target.style.top = Math.random() * (1000 - target.offsetHeight) + 'px';
    target.style.left = Math.random() * (1000 - target.offsetWidth) + 'px';

    // faire disparetre la cible
    setTimeout (function() { 
        target.remove();

    }, 700)

    //quand on click sur le target 
    target.onclick = function() {
        score+= 1;
         target.style.display = "none";
    }
    // decrementer le temps
    time-= 1;

    //afficher le score et le temps
    scoreContainer.innerHTML = `score : ${score}`;
    timeContainer.innerHTML = `time : ${time}`;


    //fin du jeu quand le temps est ecoulé 
    if (time == 0 ) {
        clearInterval(interval);
        container.innerHTML = "Fin de la partie";
        container.classList.add = ('fin-de-la-partie');
    }
    }, 1000)
}