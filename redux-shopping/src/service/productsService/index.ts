const dummy = [
  {
    id: 6,
    categoryId: 2,
    name: 'AMD 라이젠5-5세대 8600G',
    price: 279000,
    imgUrl: '/imgs/electronics/img.png',
  },
  {
    id: 7,
    categoryId: 2,
    name: '인텔 코어i7-14세대 14700K',
    price: 573000,
    imgUrl: '/imgs/electronics/img_1.png',
  },
  {
    id: 8,
    categoryId: 2,
    name: 'COLORFUL 지포스 RTX 4060 토마호크 DUO V2 D6 8GB',
    price: 434000,
    imgUrl: '/imgs/electronics/img_2.png',
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Western Digital WD BLACK SN850X M.2 NVMe (2TB)',
    price: 226200,
    imgUrl: '/imgs/electronics/img_3.png',
  },
  {
    id: 10,
    categoryId: 2,
    name: 'ASRock 라데온 RX 7900 XTX Taichi White OC D6 24GB 디앤디컴',
    price: 1729300,
    imgUrl: '/imgs/electronics/img_4.png',
  },
  {
    id: 11,
    categoryId: 3,
    name: '단호박 고구마',
    price: 6900,
    imgUrl: '/imgs/salads/img.png',
  },
  {
    id: 12,
    categoryId: 3,
    name: '카프레제',
    price: 6900,
    imgUrl: '/imgs/salads/img_1.png',
  },
  {
    id: 13,
    categoryId: 3,
    name: '마카로니 콥',
    price: 7100,
    imgUrl: '/imgs/salads/img_2.png',
  },
  {
    id: 14,
    categoryId: 3,
    name: '닭가슴살 아몬드',
    price: 7500,
    imgUrl: '/imgs/salads/img_3.png',
  },
  {
    id: 15,
    categoryId: 3,
    name: '치킨 타코',
    price: 8100,
    imgUrl: '/imgs/salads/img_4.png',
  },
  {
    id: 1,
    categoryId: 4,
    name: '신발1',
    price: 1000,
    imgUrl: '/imgs/shoes/img.png',
  },
  {
    id: 2,
    categoryId: 4,
    name: '신발2',
    price: 2000,
    imgUrl: '/imgs/shoes/img_1.png',
  },
  {
    id: 3,
    categoryId: 4,
    name: '신발3',
    price: 3000,
    imgUrl: '/imgs/shoes/img_2.png',
  },
  {
    id: 4,
    categoryId: 4,
    name: '신발4',
    price: 4000,
    imgUrl: '/imgs/shoes/img_3.png',
  },
  {
    id: 5,
    categoryId: 4,
    name: '신발5',
    price: 5000,
    imgUrl: '/imgs/shoes/img_4.png',
  },
];

class ProductService {
  limit = 5;

  // findShoes() {
  //   return dummy.filter((item) => item.categoryId === 4);
  // }
  //
  // findElectronics() {
  //   return dummy.filter((item) => item.categoryId === 2);
  // }
  //
  // findSalads() {
  //   return dummy.filter((item) => item.categoryId === 3);
  // }

  findAllProductsByCategory(page: number, offset: number, category: string) {
    const productsAll = dummy.filter((item) => item.categoryId === +category);
    const products = productsAll.filter((_, i) => {
      if (i >= offset && i < offset + this.limit) return true;
      return false;
    });

    return {
      products,
      page,
      offset,
      limit: this.limit,
      total: productsAll.length,
      totalPages: Math.floor(productsAll.length / this.limit),
    };
  }

  findAllProducts(page: number, offset: number) {
    const products = dummy.filter((item, i) => {
      if (i >= offset && i < offset + this.limit) return true;
      return false;
    });

    return {
      products,
      page,
      offset,
      limit: this.limit,
      total: dummy.length,
      totalPages: Math.floor(dummy.length / this.limit),
    };
  }
}

export { ProductService };
