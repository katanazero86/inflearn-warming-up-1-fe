const dummy = [
    {
        name: '닭가슴살 샐러드',
        price: 1000,
        imgUrl: './assets/img.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'breakfast',
    },
    {
        name: '크렌베리 샐러드',
        price: 2000,
        imgUrl: './assets/img_1.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'breakfast',
    },
    {
        name: '마카로니 콥 샐러드',
        price: 3000,
        imgUrl: './assets/img_2.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'breakfast',
    },
    {
        name: '햄버거',
        price: 4000,
        imgUrl: './assets/img_3.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'lunch',
    },
    {
        name: '불고기',
        price: 5000,
        imgUrl: './assets/img_4.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'lunch',
    },
    {
        name: '갈비탕',
        price: 6000,
        imgUrl: './assets/img_5.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'shakes',
    },
    {
        name: '닭가슴살 샐러드 저녁1',
        price: 7000,
        imgUrl: './assets/img.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'dinner',
    },
    {
        name: '닭가슴살 샐러드 저녁2',
        price: 8000,
        imgUrl: './assets/img.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'dinner',
    },
    {
        name: '닭가슴살 샐러드 저녁3',
        price: 9000,
        imgUrl: './assets/img.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'dinner',
    },
    {
        name: '닭가슴살 샐러드 저녁4',
        price: 10000,
        imgUrl: './assets/img.png',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'dinner',
    }
];

const navListEl = document.querySelector('.nav-list');
const foodCardTemplate = document.querySelector('#food-card');
const cardWrapEl = document.querySelector('.card-wrap')

let foodFlag = 'all';
navListEl.addEventListener('click', (e) => {
    e.preventDefault();
    const {flag} = e.target.dataset;
    if (flag !== undefined) {
        foodFlag = flag;
        renderFoodMenu(dummy.filter(data => {
            if(foodFlag === 'all') return true;
            return data.type === foodFlag;
        }))
    }
});


const renderFoodMenu = (targetFoodMenu) => {
    if (targetFoodMenu.length !== 0) {
        cardWrapEl.innerHTML = '';
        const template = foodCardTemplate.content;
        const fragment = document.createDocumentFragment();
        targetFoodMenu.forEach(food => {
            const instance = document.importNode(template, true);
            instance.querySelector('.food-img').src = food.imgUrl;
            instance.querySelector('.title').textContent = food.name;
            instance.querySelector('.price').textContent = `${food.price}원`;
            instance.querySelector('.contents').textContent = food.contents;
            fragment.appendChild(instance);
        });
        cardWrapEl.appendChild(fragment);
    }
};

renderFoodMenu([...dummy]);
