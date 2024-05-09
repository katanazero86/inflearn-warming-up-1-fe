'use client';

import { useState, MouseEvent } from 'react';
import HamburgerMenuIcon from '@/components/Icons/HamburgerMenuIcon/HamburgerMenuIcon';
import { cva } from 'class-variance-authority';
import CloseIcon from '@/components/Icons/CloseIcon/CloseIcon';
import { cn } from '@/utils/classNameUtil';

const DrawerContainerVariants = cva(
  `fixed bg-black top-0 bottom-0 right-0 left-0 -z-10 bg-opacity-0 transition-all delay-250 duration-500`,
  {
    variants: {
      isOpen: {
        true: `z-50 bg-opacity-25`,
      },
    },
  },
);

const DrawerNavVariants = cva(
  `bg-slate-100 h-full w-full max-w-96 p-3 translate-x-[-384px] transition-all delay-200`,
  {
    variants: {
      isOpen: {
        true: `translate-x-0`,
      },
    },
  },
);

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuIconClick = () => {
    setIsOpen(true);
  };
  const handleCloseIconClick = () => {
    setIsOpen(false);
  };
  const handleDimmClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <>
      <HamburgerMenuIcon onClick={handleMenuIconClick} />
      <aside
        className={cn(
          DrawerContainerVariants({
            isOpen,
          }),
        )}
        onClick={handleDimmClick}
      >
        <nav className={cn(DrawerNavVariants({ isOpen }))}>
          <div className={`flex items-center justify-end`}>
            <CloseIcon onClick={handleCloseIconClick} />
          </div>
          <section className={`py-2`}>
            <h3 className={`text-lg font-semibold`}>전체 카테고리</h3>
            <ul className={`grid grid-cols-2 gap-2`}>
              <li className={`cursor-pointer py-3 text-sm hover:font-semibold`}>전체</li>
              <li className={`cursor-pointer py-3 text-sm hover:font-semibold`}>전자기기</li>
              <li className={`cursor-pointer py-3 text-sm hover:font-semibold`}>샐러드</li>
              <li className={`cursor-pointer py-3 text-sm hover:font-semibold`}>의류</li>
            </ul>
          </section>
        </nav>
      </aside>
    </>
  );
}
