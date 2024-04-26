const bookFormEl = document.querySelector('.book-form');

bookFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookName = e.target['bookName'].value;
    const author = e.target['author'].value;
    if (bookName === '') {
        e.target['bookName'].focus();
        return false;
    }
    if (author === '') {
        e.target['author'].focus();
        return false;
    }

    setBook(bookName, author);
    e.target['bookName'].value = '';
    e.target['author'].value = '';
    const currentIndex = renderBookList();
    initDeleteIconBtnEvent(currentIndex);
    showAddNotify();
});

const setBook = (bookName, author) => {
    const bookList = localStorage.getItem('bookList');
    if (bookList === null) {
        localStorage.setItem('bookList', JSON.stringify([
            {bookName, author}
        ]))
    } else {
        const newBookList = JSON.parse(bookList);
        newBookList.push({
            bookName, author
        });
        localStorage.setItem('bookList', JSON.stringify(newBookList));
    }
};

const renderBookList = () => {
    const bookList = localStorage.getItem('bookList');
    if (bookList !== null) {
        const booListArr = JSON.parse(bookList);
        const currentIndex = booListArr.length - 1;
        const bookListBody = document.querySelector('.book-list-body');
        bookListBody.innerHTML += `
        <div class="item">
            <p>${booListArr[currentIndex].bookName}</p>
            <p>${booListArr[currentIndex].author}</p>
            <div class="delete-icon delete-icon-${currentIndex}">
                <i class="fa-solid fa-delete-left" data-index="${currentIndex}"></i>
            </div>
        </div>`;
        return currentIndex;
    }
};

const initDeleteIconBtnEvent = (currentIndex) => {
    const deleteIconBtnEl = document.querySelector(`.delete-icon-${currentIndex}`);
    deleteIconBtnEl.addEventListener('click', (e) => {
        const {index: targetIndex} = e.target.dataset;
        const bookList = JSON.parse(localStorage.getItem('bookList'));
        const newBookList = bookList.filter((book, index) => {
            if (index !== Number(targetIndex)) return book;
        });
        if (newBookList.length === 0) {
            localStorage.removeItem('bookList');
        } else {
            localStorage.setItem('bookList', JSON.stringify(newBookList));
        }
        const parent = deleteIconBtnEl.parentNode;
        deleteIconBtnEl.parentNode.parentNode.removeChild(parent);
        showAddNotify('remove');
    });
}

const showAddNotify = (flag = 'add') => {
    const notifyEl = document.querySelector('.notify');
    if (flag === 'add') {
        notifyEl.textContent = '추가 되었습니다.'
    } else {
        notifyEl.textContent = '삭제 되었습니다.'
    }
    notifyEl.classList.add('active');
    setTimeout(() => {
        notifyEl.classList.remove('active');
        notifyEl.textContent = '';
    }, 850);
};