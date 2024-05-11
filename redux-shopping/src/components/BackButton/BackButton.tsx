'use client';

import Button from '@/components/Forms/Button/Button';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button variant={'default'} onClick={handleClick}>
      뒤로 가기
    </Button>
  );
}
