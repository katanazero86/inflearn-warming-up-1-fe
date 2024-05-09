'use client';

import { useState, MouseEvent, useEffect } from 'react';
import HamburgerMenuIcon from '@/components/Icons/HamburgerMenuIcon/HamburgerMenuIcon';
import { cva } from 'class-variance-authority';
import CloseIcon from '@/components/Icons/CloseIcon/CloseIcon';
import { cn } from '@/utils/classNameUtil';
import Link from 'next/link';

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
  const [categories, setCategories] = useState<{ name: string; url: string }[]>([]);
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

  const handleCategoryClick = () => {
    setIsOpen(false);
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories', {
        method: 'GET',
      });
      const data = await res.json();
      setCategories(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
              {categories.length > 0 &&
                categories.map((category) => (
                  <li
                    className={`cursor-pointer py-3 text-sm hover:font-semibold`}
                    key={category.name}
                  >
                    <Link href={category.url} onClick={handleCategoryClick}>
                      {category.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        </nav>
      </aside>
    </>
  );
}
