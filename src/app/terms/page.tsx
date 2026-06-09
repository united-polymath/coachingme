import { Eyebrow } from '@/components/Container';

export const metadata = { title: '이용약관 — COACHINGME Korea' };

const SECTIONS = [
  { title: '01. 약관 동의', body: '본 사이트의 이용은 본 약관에 대한 동의를 전제로 합니다.' },
  {
    title: '02. 사이트의 목적',
    body: '본 사이트는 융합 컨설팅 단체 COACHINGME Korea의 공식 웹사이트로, 단체의 정체성과 서비스를 안내합니다.',
  },
  {
    title: '03. 컨설팅 자문 간주 불가',
    body: '본 사이트의 콘텐츠는 정보 제공 목적이며, 그 자체로 정식 컨설팅 자문을 구성하지 않습니다. 실제 컨설팅은 정식 계약 이후에만 진행됩니다.',
  },
  {
    title: '04. 지식재산권 보호',
    body: '본 사이트의 모든 콘텐츠 저작권은 COACHINGME Korea에 귀속됩니다. 무단 복제, 배포, 2차 가공을 금지합니다.',
  },
  { title: '05. 면책 조항', body: '본 사이트의 콘텐츠는 "as is" 상태로 제공됩니다.' },
  {
    title: '06. 책임의 한계',
    body: '고의 또는 중과실이 없는 한 COACHINGME Korea는 본 사이트 이용으로 인한 손해에 대해 법적 책임을 지지 않습니다.',
  },
  {
    title: '07. 준거법 및 관할',
    body: '본 약관은 대한민국 법률에 따르며, 분쟁은 서울 소재 법원을 관할 법원으로 합니다.',
  },
  { title: '08. 약관의 개정', body: 'COACHINGME Korea는 필요 시 본 약관을 개정할 수 있습니다.' },
  {
    title: '09. 약관 관련 문의',
    body: '약관 관련 문의는 inquiry@coachingme.kr 로 보내주시기 바랍니다.',
  },
];

export default function TermsPage() {
  return (
    <section className="container py-20 md:py-32">
      <Eyebrow>법적 페이지</Eyebrow>
      <h1 className="mt-6 text-[2rem] font-bold leading-tight tracking-tightest text-ink md:text-[2.8rem]">
        이용약관
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
