'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    name: '마이페이지',
    href: '/my-page',
  },
  {
    name: '추천질문',
    href: '/recommend-questions',
  },
  {
    name: '모의면접',
    href: '/mock-interview',
  },
];

export const GNB = () => {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Q-IT
        </Link>

        <nav className="flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary text-sm font-medium transition-colors"
                style={isActive ? { color: 'var(--primary)' } : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
