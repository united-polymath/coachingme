import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="mt-32 bg-pine-900 text-paper/80">
      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/symbol-white.png"
                alt=""
                width={263}
                height={274}
                className="h-10 w-auto"
              />
              <Image
                src="/brand/wordmark-white.png"
                alt="COACHING ME"
                width={462}
                height={60}
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/65">
              경계를 허무는 융합 컨설팅 그룹.
              <br />
              취업·이직, 창업, 진로·적성, 인성·성향. 네 분야의 검증된 전문가가 모인 글로벌 단체입니다.
            </p>
          </div>

          <FooterCol
            title="단체"
            links={[
              { href: '/about', label: 'About' },
              { href: '/coach', label: '코치진' },
            ]}
          />
          <FooterCol
            title="서비스"
            links={[
              { href: '/assessment', label: '진단' },
              { href: '/education', label: '교육' },
              { href: '/insights', label: '인사이트' },
            ]}
          />
          <FooterCol
            title="문의"
            links={[
              { href: '/contact', label: '상담 요청' },
              { href: 'mailto:inquiry@coachingme.kr', label: 'inquiry@coachingme.kr', external: true },
            ]}
          />
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/12 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-paper/45">© COACHINGME Korea. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-paper/60">
            <Link href="/privacy" className="hover:text-paper">개인정보 처리방침</Link>
            <Link href="/terms" className="hover:text-paper">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="text-[0.7rem] font-semibold uppercase tracking-wide2 text-paper">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            {l.external ? (
              <a href={l.href} className="text-sm text-paper/65 hover:text-paper">
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className="text-sm text-paper/65 hover:text-paper">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
