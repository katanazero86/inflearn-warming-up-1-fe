import Image from 'next/image';
import Link from 'next/link';
import TestCounter from '@/components/TestCounter';

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <TestCounter />
      <Link href="/counter">counter</Link>
    </main>
  );
}
