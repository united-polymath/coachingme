import { Eyebrow } from '@/components/Container';

export const metadata = { title: '개인정보 처리방침 — COACHINGME Korea' };

const SECTIONS = [
  {
    title: '01. 수집 항목',
    body: '이름, 이메일, 문의 내용만을 수집합니다. 추적 쿠키나 분석 스크립트는 일체 사용하지 않습니다.',
  },
  {
    title: '02. 이용 목적',
    body: '문의 검토와 최적의 컨설턴트 또는 팀 배정용으로만 이용합니다. 제3자 판매·공유·양도는 없습니다.',
  },
  {
    title: '03. 철저한 비밀 유지',
    body: '문의 내용은 COACHINGME Korea 내부에서만 관리됩니다. 매칭된 컨설턴트도 동일한 비밀 유지 의무를 따릅니다.',
  },
  {
    title: '04. 보유 및 파기',
    body: '상담 및 사후 관리에 필요한 최소 기간만 보관합니다. 정보주체가 삭제를 요청하면 지체 없이 파기합니다.',
  },
  {
    title: '05. 정보주체의 권리',
    body: '본인 정보의 열람·정정·삭제·동의 철회를 언제든 요청할 수 있습니다.',
  },
  {
    title: '06. 정책 변경 안내',
    body: '본 방침의 변경 시 본 페이지의 최종 업데이트 일자를 갱신합니다.',
  },
  {
    title: '07. 담당자 문의',
    body: '개인정보 관련 문의는 inquiry@coachingme.kr 로 보내주시기 바랍니다.',
  },
];

export default function PrivacyPage() {
  return (
    <section className="container py-20 md:py-32">
      <Eyebrow>법적 페이지</Eyebrow>
      <h1 className="mt-6 text-[2rem] font-bold leading-tight tracking-tightest text-ink md:text-[2.8rem]">
        개인정보 처리방침
      </h1>
      <p className="mt-4 text-xs text-ink-subtle">최종 업데이트: 2025-01-01</p>

      <div className="mt-16 max-w-prose">
        {SECTIONS.map((s) => (
          <div key={s.title} className="border-t border-edge py-7">
            <h2 className="text-base font-semibold text-ink">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
