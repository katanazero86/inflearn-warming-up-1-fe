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

    renderBookList();
    showAddNotify();
});

const bookListBodyEl = document.querySelector('.book-list-body');
bookListBodyEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-delete-left') && e.target.tagName.toLowerCase() === 'i') {
        const {index: targetIndex} = e.target.dataset;
        const deleteIconBtnEl = document.querySelector(`.delete-icon-${targetIndex}`);

        const bookList = JSON.parse(localStorage.getItem('bookList'));
        const newBookList = bookList.filter((book, index) => {
            if (index !== Number(targetIndex)) return book;
        });
        if (newBookList.length === 0) {
            localStorage.removeItem('bookList');
        } else {
            localStorage.setItem('bookList', JSON.stringify(newBookList));
        }

        const itemEl = deleteIconBtnEl.parentNode;
        let nextItemEl = itemEl.nextElementSibling;
        while (nextItemEl !== null) {
            const {index} = nextItemEl.querySelector('.delete-icon > i').dataset;
            nextItemEl.querySelector('.delete-icon').classList.remove(`delete-icon-${index}`);
            nextItemEl.querySelector('.delete-icon').classList.add(`delete-icon-${index - 1}`);
            nextItemEl.querySelector('.delete-icon > i').dataset.index = index - 1;
            nextItemEl = nextItemEl.nextElementSibling;
        }

        itemEl.parentNode.removeChild(itemEl);
        showAddNotify('remove');
    }
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
        const itemTemplate = document.querySelector('#item');
        const clone = document.importNode(itemTemplate.content, true);
        clone.querySelector('.book-name').textContent = booListArr[currentIndex].bookName;
        clone.querySelector('.book-author').textContent = booListArr[currentIndex].author;
        clone.querySelector('.delete-icon').classList.add(`delete-icon-${currentIndex}`);
        clone.querySelector('.delete-icon > i').dataset.index = currentIndex;
        bookListBody.appendChild(clone);
    }
};

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