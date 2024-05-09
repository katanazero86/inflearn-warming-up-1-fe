import { NextRequest, NextResponse } from 'next/server';
import { ProductService } from '@/service/productsService';

export function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get('category');
  const page = req.nextUrl.searchParams.get('page');
  const offset = req.nextUrl.searchParams.get('offset');

  const productService = new ProductService();
  let products;
  switch (category) {
    case '2':
      products = productService.findElectronics();
      break;
    case '3':
      products = productService.findSalads();
      break;
    case '4':
      products = productService.findShoes();
      break;
    default: {
      products = productService.findAllProducts(+page!, +offset!);
    }
  }

  return NextResponse.json(
    {
      products,
    },
    {
      status: 200,
    },
  );
}
