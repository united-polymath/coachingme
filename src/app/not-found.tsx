import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="text-6xl font-bold tracking-tightest text-pine-700">404</p>
      <h1 className="mt-6 text-[1.6rem] font-semibold leading-tight tracking-tightest text-ink md:text-[2.2rem]">
        찾으시는 페이지가 없습니다.
      </h1>
      <p className="mt-5 max-w-md text-ink-muted">
        주소가 변경되었거나 페이지가 이동되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-pine-700 px-6 py-3 text-sm font-medium text-paper hover:bg-pine-800"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
