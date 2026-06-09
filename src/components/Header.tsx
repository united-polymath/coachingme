'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/about', label: 'ABOUT' },
  { href: '/coach', label: 'COACH' },
  { href: '/assessment', label: 'ASSESSMENT' },
  { href: '/education', label: 'EDUCATION' },
  { href: '/insights', label: 'INSIGHTS' },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-edge bg-paper/95 backdrop-blur-md">
      <div className="container flex h-[68px] items-center justify-between md:h-[76px]">
        <Link href="/" className="flex items-center gap-2.5" aria-label="COACHING ME — 홈">
          <Image
            src="/brand/symbol-green.png"
            alt=""
            width={263}
            height={274}
            priority
            className="h-8 w-auto md:h-9"
          />
          <Image
            src="/brand/wordmark-green.png"
            alt="COACHING ME"
            width={462}
            height={60}
            priority
            className="h-[22px] w-auto md:h-6"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[0.83rem] font-medium tracking-tight transition-colors ${
                  active ? 'text-pine-700' : 'text-ink-muted hover:text-pine-700'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-[26px] left-1/2 h-[2px] w-5 -translate-x-1/2 bg-pine-700" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden bg-pine-700 px-5 py-2.5 text-[0.78rem] font-medium tracking-tight text-paper transition-colors hover:bg-pine-800 md:inline-block"
          >
            문의하기
          </Link>
          <button
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform ${
                  menuOpen ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-full bg-ink transition-transform ${
                  menuOpen ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-edge bg-paper md:hidden">
          <nav className="container flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-edge py-4 text-sm font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 bg-pine-700 py-3 text-center text-sm font-medium text-paper"
            >
              문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
