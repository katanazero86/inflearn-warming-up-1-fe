export interface Product {
  categoryId: number;
  id: number;
  imgUrl: string;
  name: string;
  price: number;
}

export interface ProductsInfinity {
  products: {
    limit: number;
    offset: number;
    page: number;
    total: number;
    totalPages: number;
    products: Product[];
  };
}
