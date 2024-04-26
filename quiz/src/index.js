const operations = ['+', '-', '*', '/'];
const min = 0;
const max = 100;
let currentQuizAnswers = '';
const getRandom = () => {
    return Math.floor((Math.random() * max - min + 1) - min);
}

const getRandomOperations = () => {
    const index = Math.floor(Math.random() * 4);
    return operations[index === 4 ? 3 : index];
}

const calculateExpression = (targetQ) => {
    const parts = targetQ.split('');
    let op = ''
    let num1 = '';
    let num2 = '';

    for (const char of parts) {
        if (op === '') {
            if (operations.includes(char)) {
                op = char;
            } else {
                num1 += char;
            }
        } else {
            num2 += char
        }
    }

    switch (op) {
        case '+' :
            return Number(num1) + Number(num2);
        case '-' :
            return Number(num1) - Number(num2);
        case '*' :
            return Number(num1) * Number(num2);
        case '/' :
            return (Number(num1) / Number(num2)).toFixed(1);
    }
}
const initQuiz = () => {
    const num1 = getRandom();
    const num2 = getRandom();
    const q = `${num1}${getRandomOperations()}${num2}`;
    const a = calculateExpression(q);
    currentQuizAnswers = a;
    const aIndex = Math.floor((Math.random() * 3 - 0 + 1) - 0)

    const answerWrapEl = document.querySelector('.answer-wrap');
    const questionEl = document.querySelector('.question');
    questionEl.textContent = `${q} = ?`;
    for (let i = 0; i < 4; i++) {
        const btnEl = document.createElement('button');
        const answerNum = getRandom();
        if (aIndex === i) {
            btnEl.dataset.answer = a;
            btnEl.textContent = a;
        } else {
            btnEl.dataset.answer = answerNum;
            btnEl.textContent = answerNum;
        }
        answerWrapEl.appendChild(btnEl);
    }
}

initQuiz();

const answerWrapEl = document.querySelector('.answer-wrap');
answerWrapEl.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
        const {answer} = e.target.dataset;
        checkQuizAnswers(answer);
    }
});

const checkQuizAnswers = (selectedAnswer) => {
    const answerList = document.querySelectorAll('.answer-wrap > button');
    const nextBtnEl = document.querySelector('.next-btn');
    if (Number(selectedAnswer) === Number(currentQuizAnswers)) {
        document.body.style.backgroundColor = '#059862'
    } else {
        document.body.style.backgroundColor = '#fc0330'
    }

    answerList.forEach(node => {
        const {answer} = node.dataset;
        if (Number(answer) === Number(currentQuizAnswers)) {
            node.classList.add('green', 'event-none');
        } else {
            node.classList.add('red', 'event-none');
        }
    });
    nextBtnEl.classList.remove('hidden');
};

const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', () => {
    const nextBtnEl = document.querySelector('.next-btn');
    nextBtnEl.classList.add('hidden');
    document.querySelector('.answer-wrap').innerHTML = '';
    document.body.style.backgroundColor = '#6363ff';
    initQuiz();
});