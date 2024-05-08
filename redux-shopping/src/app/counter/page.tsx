'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { decrement, increment } from '@/store/counter/countSlice';
import Link from 'next/link';

export default function CounterPage() {
  const counter = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  console.log('CounterPage..');

  return (
    <div>
      <h2 className="p-2 text-center">{counter}</h2>
      <div className="flex items-center flex-col gap-2">
        <button
          className="bg-indigo-400 border-indigo-400 font-bold text-lg rounded-lg px-8 py-2"
          onClick={() => dispatch(increment())}
        >
          증가
        </button>
        <button
          className="bg-indigo-400 border-indigo-400 font-bold text-lg rounded-lg px-8 py-2"
          onClick={() => dispatch(decrement())}
        >
          감소
        </button>
      </div>
      <Link href="/">index</Link>
    </div>
  );
}
