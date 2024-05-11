import { NextResponse } from 'next/server';
import { ProductService } from '@/service/productsService';

type ParamsType = {
  params: {
    id: string;
  };
};

export function GET(_: Request, { params }: ParamsType) {
  const { id } = params;
  if (!id)
    return NextResponse.json(
      {
        error: 'id value does not exist.',
      },
      {
        status: 500,
        statusText: 'Internal Server Error',
      },
    );

  const productService = new ProductService();
  const metadata = productService.findProductsMetaDataById(+id);
  return NextResponse.json(
    {
      ...metadata,
    },
    {
      status: 200,
    },
  );
}
