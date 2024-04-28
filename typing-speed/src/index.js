const typingGameTexts = [
    [
        `What's the weather like?`,
        `What are you going to do?`,
        `Take your time, please.`,
        `That is what I'm saying.`,
        `Is there a hotel in this area?`,
        `I don't know what to say.`,
        `I'm about to leave.`
    ]
];

const sec = 20;
let gameTimer = sec; // 20 sec
let gameTextsIndex = 0;
let currentText = '';
let beforeErrorCount = 0;
let errorCount = 0;
let totalTexts = 0;
let accuracy = 100;
let interval = null;

let beforeNumberOfCharactersEntered = 0
let numberOfCharactersEntered = 0;

const updateErrorsCount = () => {
    const currentTextRedEl = document.querySelectorAll('.current-text .red');
    const errorsCountEl = document.querySelector('.errors .count');
    errorCount = currentTextRedEl.length;
    errorsCountEl.textContent = beforeErrorCount + errorCount;
};

const updateAccuracyCount = () => {
    const totalError = beforeErrorCount + errorCount;
    const accuracyCountEl = document.querySelector('.accuracy .count');
    accuracy = 100 - (totalError / totalTexts) * 100; // (틀린 문자수 / 전체 문자수) * 100
    accuracyCountEl.textContent = accuracy.toFixed(0);
};

const updateWPM = () => {
    const totalCharactersEntered = beforeNumberOfCharactersEntered + numberOfCharactersEntered;
    let finalWPM;
    if (gameTimer === 0) {
        finalWPM = (totalCharactersEntered / 5) * (60 / sec)
        console.log(finalWPM);
    } else {
        finalWPM = (totalCharactersEntered / 5) * (60 / (sec - gameTimer))
        console.log(finalWPM);
    }
    const wpmCountEl = document.querySelector('.wpm .count');
    wpmCountEl.textContent = finalWPM.toFixed(0);
    wpmCountEl.parentElement.classList.remove('hidden');
};

const updateCPM = () => {
    const totalCharactersEntered = beforeNumberOfCharactersEntered + numberOfCharactersEntered;
    let finalCPM;
    if (gameTimer === 0) {
        finalCPM = (totalCharactersEntered / (20 / 60));
        console.log(finalCPM)
    } else {
        finalCPM = (totalCharactersEntered / ((sec - gameTimer) / 60));
        console.log(finalCPM)
    }
    const cpmCountEl = document.querySelector('.cpm .count');
    cpmCountEl.textContent = finalCPM.toFixed(0);
    cpmCountEl.parentElement.classList.remove('hidden');
};

const startTypingGame = () => {
    initTypingGame();

    const timeCountEl = document.querySelector('.time .count');
    interval = setInterval(() => {
        if (gameTimer === 0) stopTypingGame(); // 게임 종료
        timeCountEl.textContent = gameTimer--;
    }, 1000);

    currentText = typingGameTexts[0][gameTextsIndex];
    totalTexts = typingGameTexts[0].reduce((acc, val) => {
        return acc + val.length;
    }, totalTexts);

    const currentTextEl = document.querySelector('.current-text');
    currentTextEl.classList.remove('hidden');
    currentTextEl.nextElementSibling.classList.add('hidden');
    currentTextEl.textContent = currentText;
    document.querySelector('.text-input').disabled = false;
    document.querySelector('.text-input').focus();
};

const restartTypingGame = () => {
    const currentTextEl = document.querySelector('.current-text');
    currentTextEl.classList.add('hidden');
    currentTextEl.nextElementSibling.classList.remove('hidden');
};

const stopTypingGame = () => {
    clearInterval(interval);
    const textInputEl = document.querySelector('.text-input');
    textInputEl.value = '';
    textInputEl.disabled = true;

    // WPM, CPM 측정
    updateWPM();
    updateCPM();

    // 재시작
    restartTypingGame();
};

const initTypingGame = () => {
    gameTimer = 20;
    gameTextsIndex = 0;
    currentText = '';
    beforeErrorCount = 0;
    errorCount = 0;
    totalTexts = 0;
    accuracy = 100;
    interval = null;
    beforeNumberOfCharactersEntered = 0
    numberOfCharactersEntered = 0;

    const errorsCountEl = document.querySelector('.errors .count');
    errorsCountEl.textContent = 0;
    const accuracyCountEl = document.querySelector('.accuracy .count');
    accuracyCountEl.textContent = 100;

};

const loadNextText = () => {
    gameTextsIndex += 1;
    currentText = typingGameTexts[0][gameTextsIndex];
    if (currentText === undefined) stopTypingGame(); // 게임 종료

    const currentTextEl = document.querySelector('.current-text');
    currentTextEl.textContent = currentText;
    document.querySelector('.text-input').value = '';
    beforeErrorCount += errorCount;
};

const textInputEl = document.querySelector('.text-input');
textInputEl.addEventListener('input', (e) => {
    const currentTextEl = document.querySelector('.current-text');
    const userText = e.target.value.split('');
    currentTextEl.innerHTML = '';
    const fragment = document.createDocumentFragment();

    numberOfCharactersEntered = userText.length;
    currentText.split('').forEach((char, index) => {
        const spanEl = document.createElement('span');
        if (userText[index] !== undefined) {
            spanEl.textContent = char;
            spanEl.style.color = userText[index] === char ? 'green' : 'red';
            spanEl.classList.add(userText[index] === char ? 'green' : 'red');
            fragment.appendChild(spanEl);
        } else {
            spanEl.textContent = char;
            fragment.appendChild(spanEl);
        }
    });
    currentTextEl.appendChild(fragment);
    updateErrorsCount(); // 에러 업데이트
    updateAccuracyCount(); // 정확도 업데이트

    // 현재 문장 다 입력 하면, 다음 문장으로 넘어 간다.
    if (userText.length === currentText.length) {
        beforeNumberOfCharactersEntered += currentText.length;
        loadNextText();
    }
});

const gameStartEl = document.querySelector('.game-start');
gameStartEl.addEventListener('click', startTypingGame);