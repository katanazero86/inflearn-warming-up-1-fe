const ranges = [
    [48, 57],   // 숫자 0-9
    [97, 122],  // 소문자 a-z
    [65, 90],   // 대문자 A-Z
    ['@', '!', '$', '&', '%'], // 특수 문자
];

const renderGeneratedPassword = (targetResultPassword) => {
    const passwordEl = document.querySelector('.password');
    passwordEl.textContent = targetResultPassword;
};

const generateRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const generateRandomByMinAndMax = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const generatePassword = (targetLength, targetCheckedOptions) => {
    let resultPassword = '';
    const targetRange = targetCheckedOptions.map(i => ranges[i]);
    const includeOptionMax = targetCheckedOptions.length;
    const specialCharLength = ranges[3].length;
    for (let i = 0; i < targetLength; i++) {
        let createdChar = '';
        const optionIndex = generateRandomInt(includeOptionMax);
        if (targetRange[optionIndex].includes('@')) {
            const targetSpecialCharIndex = generateRandomInt(specialCharLength);
            createdChar = targetRange[optionIndex][targetSpecialCharIndex];
        } else {
            const [min, max] = targetRange[optionIndex];
            createdChar = String.fromCharCode(generateRandomByMinAndMax(min, max));
        }
        resultPassword += createdChar;
    }
    renderGeneratedPassword(resultPassword);
};

const inputLengthEl = document.querySelector('#input-length');
inputLengthEl.addEventListener('input', (e) => {
    const numberExp = /[^0-9]/g;
    e.target.value = e.target.value.replace(numberExp, '');
});

const passwordCreatorFormEl = document.querySelector('.password-creator-form');
passwordCreatorFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const length = e.target['length'].value;
    if (length === '') {
        alert('비밀번호 생성 길이를 입력해 주세요!');
        inputLengthEl.value = '';
        inputLengthEl.focus();
        return false;
    }
    if (length < 5) {
        alert('비밀번호 생성 최소 길이는 5 이상 입니다!');
        inputLengthEl.value = '';
        inputLengthEl.focus();
        return false;
    }
    if (length > 70) {
        alert('비밀번호 생성 최대 길이는 70 이하 입니다!');
        inputLengthEl.value = '';
        inputLengthEl.focus();
        return false;
    }

    const includeCharCheckbox = e.target['include-char'];
    const checkedOptions = [];
    includeCharCheckbox.forEach((checkbox, index) => {
        if (checkbox.checked) checkedOptions.push(index);
    });
    if(checkedOptions.length === 0) {
        alert('포함할 문자를 선택해주세요!');
        return false;
    }
    generatePassword(length, [...checkedOptions]);
});

const passwordCopyEl = document.querySelector('.password-copy');
passwordCopyEl.addEventListener('click', () => {
    const passwordEl = document.querySelector('.password');
    navigator.clipboard.writeText(passwordEl.textContent)
        .then(() => {
            console.log("Text copied to clipboard...");
            alert('복사 되었습니다 :)');
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });
});
