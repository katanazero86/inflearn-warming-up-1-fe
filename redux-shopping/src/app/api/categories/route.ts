export function GET(req: Request) {
  const categories = [
    {
      name: '전체',
      url: '',
    },
    {
      name: '전자기기',
      url: '',
    },
    {
      name: '샐러드',
      url: '',
    },
    {
      name: '신발',
      url: '',
    },
  ];
  return Response.json(categories);
}
