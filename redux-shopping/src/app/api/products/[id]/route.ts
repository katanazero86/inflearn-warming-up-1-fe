import { ProductService } from '@/service/productsService';
import { NextResponse } from 'next/server';

type ParamsType = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params }: ParamsType) {
  const { id } = params;
  const productsService = new ProductService();
  const product = await productsService.findProductsByID(+id);
  return NextResponse.json(product, {
    status: 200,
  });
}
