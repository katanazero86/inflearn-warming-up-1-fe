const data = ['가위', '바위', '보'];
let remainingNumber = 10;
let playerWin = 0;
let cpuWin = 0;
let initFlag = false;

const max = 2
const min = 0;
const getRandom = () => {
    return Math.floor((Math.random() * max - min + 1) + min);
};

const initData = () => {
    const playerScoreEl = document.querySelector('.player-score');
    const cpuScoreEl = document.querySelector('.cpu-score');
    const remainingNumberSpanEl = document.querySelector('.remaining-number span');

    playerScoreEl.textContent = playerWin;
    cpuScoreEl.textContent = cpuWin;
    remainingNumberSpanEl.textContent = remainingNumber;

    const result = document.querySelector('.result');
    const buttonsEl = document.querySelector('.buttons');

    if (!initFlag) {
        buttonsEl.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'button') {
                const playerSelect = e.target.textContent;
                const cpuSelect = data[getRandom()];

                if (playerSelect === cpuSelect) {
                    result.textContent = '무승부';
                } else {
                    if (playerSelect === '가위') {
                        if (cpuSelect === '바위') {
                            cpuWin += 1;
                            result.textContent = '컴퓨터 승리';
                        } else {
                            playerWin += 1;
                            result.textContent = '플레이어 승리';
                        }
                    }
                    if (playerSelect === '바위') {
                        if (cpuSelect === '보') {
                            cpuWin += 1;
                            result.textContent = '컴퓨터 승리';
                        } else {
                            playerWin += 1;
                            result.textContent = '플레이어 승리';
                        }
                    }
                    if (playerSelect === '보') {
                        if (cpuSelect === '가위') {
                            cpuWin += 1;
                            result.textContent = '컴퓨터 승리';
                        } else {
                            playerWin += 1;
                            result.textContent = '플레이어 승리';
                        }
                    }
                }
                remainingNumber -= 1;
                updateRemainingNumber();
                updateScore();
                if (remainingNumber === 0) {
                    initGameOver();
                }
            }
        });

        const resetBtnEl = document.querySelector('.reset-btn');
        resetBtnEl.querySelector('.btn').addEventListener('click', () => {
            const remainingNumberEl = document.querySelector('.remaining-number');
            const buttonsEl = document.querySelector('.buttons');
            const gameResultTextEl = document.querySelector('.game-result-text');
            const result = document.querySelector('.result');
            const resetBtnEl = document.querySelector('.reset-btn');
            gameResultTextEl.classList.add('hidden');
            resetBtnEl.classList.add('hidden');
            remainingNumberEl.classList.remove('hidden');
            buttonsEl.classList.remove('hidden');
            result.textContent = '';

            playerWin = 0;
            cpuWin = 0;
            remainingNumber = 10;

            initData();
        });

        initFlag = true;
    }

};
document.addEventListener('DOMContentLoaded', initData);


const updateRemainingNumber = () => {
    const remainingNumberSpanEl = document.querySelector('.remaining-number span');
    remainingNumberSpanEl.textContent = remainingNumber;
};

const updateScore = () => {
    const playerScoreEl = document.querySelector('.player-score');
    const cpuScoreEl = document.querySelector('.cpu-score');
    playerScoreEl.textContent = playerWin;
    cpuScoreEl.textContent = cpuWin;
}

const initGameOver = () => {
    const remainingNumberEl = document.querySelector('.remaining-number');
    const buttonsEl = document.querySelector('.buttons');
    const gameResultTextEl = document.querySelector('.game-result-text');
    const result = document.querySelector('.result');
    const resetBtnEl = document.querySelector('.reset-btn');

    gameResultTextEl.classList.remove('hidden');
    resetBtnEl.classList.remove('hidden');
    remainingNumberEl.classList.add('hidden');
    buttonsEl.classList.add('hidden');

    if (cpuWin > playerWin) {
        return result.textContent = '게임에서 졌습니다!';
    }
    if (cpuWin < playerWin) {
        return result.textContent = '게임에서 이겼습니다!';
    }
    return result.textContent = '무승부 입니다!';
}