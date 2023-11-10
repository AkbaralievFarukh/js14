const resultText = document.querySelector('#result')
const resultPcImg = document.querySelector('.resultPcImg')
const resultUserImg = document.querySelector('.resultUserImg')
const winCount = document.querySelector('.winCount')
const loseCount = document.querySelector('.loseCount')
const drawCount = document.querySelector('.drawCount')
let win = 0;
let lose = 0;
let draw = 0;
function chooseOption(userChoice) {
    const options = ['камень', 'ножницы', 'бумага'];
    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = '';


    if (userChoice === computerChoice) {
        result = 'Ничья!';
        draw += 1;
    } else if (
        (userChoice === 'камень' && computerChoice === 'ножницы') ||
        (userChoice === 'ножницы' && computerChoice === 'бумага') ||
        (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = 'Вы победили!';
        win += 1;
    } else {
        result = 'Вы проиграли!';
        lose += 1;
    }

    resultText.innerText = `Вы выбрали ${userChoice}, компьютер выбрал ${computerChoice}. ${result}`;
    if (computerChoice === 'ножницы') {
        resultPcImg.src = './assets/nojnicy.png'
    } else if (computerChoice === 'камень') {
        resultPcImg.src = './assets/stone.png'
    } else {
        resultPcImg.src = './assets/paper.png'
    }
    if (userChoice === 'ножницы') {
        resultUserImg.src = './assets/nojnicy.png'
    } else if (userChoice === 'камень') {
        resultUserImg.src = './assets/stone.png'
    } else {
        resultUserImg.src = './assets/paper.png'
    }
    winCount.innerText = win;
    loseCount.innerText = lose;
    drawCount.innerText = draw;
}