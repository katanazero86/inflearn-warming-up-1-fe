import { cva } from 'class-variance-authority';
import { cn } from '@/utils/classNameUtil';

const TextCvaVariants = cva(`text-indigo`, {
  variants: {
    isShow: {
      true: `text-black`,
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
});

export default function TestCva() {
  return (
    <div>
      <h2>TestCva</h2>
      <h3
        className={cn(
          TextCvaVariants({
            isShow: true,
            size: 'sm',
          }),
        )}
      >
        케케케 sm
      </h3>
      <h3
        className={cn(
          TextCvaVariants({
            isShow: false,
            size: 'lg',
          }),
        )}
      >
        케케케 lg
      </h3>
    </div>
  );
}
