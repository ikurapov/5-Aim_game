const startBtn = document.querySelector('#start');
      screens = document.querySelectorAll('.screen');
      timeList = document.querySelector('#time-list');
      timeEl = document.querySelector('#time');
      board = document.querySelector('#board');
      colors = ['red', 'green', 'blue','green', 'yellow']

      score = 0;
      time = 0;


startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame()
    }
});

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {

        score++;
        event.target.remove();
        createRandomCircle();
    }
    
})



function startGame() {
    setInterval(decreaseTime, 1000)
    setTime(time)
    createRandomCircle()
    getRandomColor()
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let curent = --time
        if (curent < 10) {
            curent = `0${curent}`
        }
        setTime(curent)
    }
};
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
};

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
};

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
};

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
};

function getRandomColor(element) {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}