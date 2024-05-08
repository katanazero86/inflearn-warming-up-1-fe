import Image from 'next/image';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/counter">counter</Link>
    </main>
  );
}
