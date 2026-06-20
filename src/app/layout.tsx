import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'COACHINGME Korea — 융합 컨설팅 단체',
  description:
    '취업·이직, 창업, 진로·적성, 인성·성향. 네 분야의 검증된 전문가가 모여 분야를 가로지르는 통합적 방향을 설계합니다.',
  metadataBase: new URL('https://coachingme.kr'),
  other: {
    'naver-site-verification': '03f92dd1e26c60780fd45dc1cbd3ec5c508b673e',
    'google-site-verification': 'Ly6MuDCE-2osV7pLkNeDZ2XQCtt_UyJWAebXP-0HWc8',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
