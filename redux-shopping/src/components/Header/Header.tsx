import { cva } from 'class-variance-authority';
import { cn } from '@/utils/classNameUtil';
import Drawer from '@/components/Drawer/Drawer';
import CartIcon from '@/components/Icons/CartIcon/CartIcon';

const HeaderVariants = cva(`flex p-3 items-center justify-between border-slate-300 border-b`, {
  variants: {},
});

export default function Header() {
  return (
    <header className={cn(HeaderVariants())}>
      <Drawer />
      <div className={'relative'}>
        <CartIcon />
      </div>
    </header>
  );
}
