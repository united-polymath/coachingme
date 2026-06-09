import { Eyebrow } from '@/components/Container';
import { ContactForm } from './ContactForm';

export const metadata = {
  title: '문의하기 — COACHINGME Korea',
  description: '상담 요청은 전문가 그룹이 직접 검토 후 회신드립니다.',
};

const PRINCIPLES = [
  {
    n: '01',
    title: '전문가가 직접 읽고 판단합니다',
    body: 'AI 챗봇이나 자동 분류에 의존하지 않습니다. 모든 문의는 분야 전문가가 직접 검토합니다.',
  },
  {
    n: '02',
    title: '기계적 배정을 지양합니다',
    body: '단일 분야이면 그 분야 최고의 컨설턴트를, 복합 사안이면 다분야 TF를 맞춤 배정합니다.',
  },
  {
    n: '03',
    title: '완벽한 비밀 보장을 약속합니다',
    body: '문의 내용은 해당 프로젝트 참여자 외에는 공유되지 않습니다.',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-edge">
        <div className="container pt-20 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-4xl">
            <Eyebrow>시작하기</Eyebrow>
            <h1 className="mt-10 text-[2.2rem] font-bold leading-[1.2] tracking-tightest text-ink md:text-[3.4rem]">
              지금 마주한 고민을
              <br />
              <span className="text-pine-700">저희에게 들려주세요.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              접수된 문의는 자동으로 분류되지 않습니다. 전문가 그룹이 직접 검토하여, 고객의 상황에 가장 적합한
              컨설턴트 또는 전담 팀을 배정합니다. 영업일 기준 2일 이내 직접 회신드립니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <ContactForm />

          <aside>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
              접수 후 진행
            </p>
            <h2 className="mt-4 text-[1.5rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.85rem]">
              우리가 약속하는
              <br />
              세 가지.
            </h2>

            <div className="mt-10 space-y-8">
              {PRINCIPLES.map((p) => (
                <div key={p.n} className="border-t border-edge pt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-medium text-ink-subtle">{p.n}</span>
                    <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                  </div>
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 border border-edge bg-off p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
                직접 연락
              </p>
              <p className="mt-3 text-sm text-ink">
                inquiry@coachingme.kr
                <br />
                대한민국 서울특별시
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
