export function GET(req: Request) {
  const categories = [
    {
      id: 1,
      name: '전체',
      url: '/products',
    },
    {
      id: 2,
      name: '전자기기',
      url: '/products?category=2',
    },
    {
      id: 3,
      name: '샐러드',
      url: '/products?category=3',
    },
    {
      id: 4,
      name: '신발',
      url: '/products?category=4',
    },
  ];
  return Response.json(categories);
}
