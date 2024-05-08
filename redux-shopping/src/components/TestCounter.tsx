'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function TestCounter() {
  const counter = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  console.log('TestCounter..');

  return (
    <div>
      <h2 className="p-2 text-center">{counter}</h2>
    </div>
  );
}
