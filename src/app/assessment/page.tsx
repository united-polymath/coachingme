import Link from 'next/link';
import { Section, Eyebrow, FieldDot } from '@/components/Container';
import { ASSESSMENTS } from '@/data/assessments';
import { fieldByKey } from '@/data/fields';

export const metadata = {
  title: '진단 — COACHINGME Korea',
  description: 'COACHINGME 컨설턴트들이 정밀 컨설팅에서 쓰는 도구의 단축형 진단을 무료로 제공합니다.',
};

export default function AssessmentPage() {
  return (
    <>
      <section className="border-b border-edge">
        <div className="container pt-20 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-4xl">
            <Eyebrow>진단 도구</Eyebrow>
            <h1 className="mt-10 text-[2rem] font-bold leading-[1.25] tracking-tightest text-ink md:text-[3rem]">
              COACHINGME는 <span className="text-pine-700">AI 분석 정밀 도구</span>를 통해
              <br />
              컨설팅을 진행합니다.
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              진단과 분석을 통해 현재 좌표를 찾고 문제점을 진단 받아 명확한 방향을 그려가보세요.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-2">
          {ASSESSMENTS.map((a, i) => {
            const field = fieldByKey(a.field);
            return (
              <Link
                key={a.slug}
                href={`/assessment/${a.slug}`}
                className={`group flex flex-col border-edge p-10 transition-colors hover:bg-off md:p-12 ${
                  i % 2 === 0 ? 'md:border-r' : ''
                } border-b ${i >= ASSESSMENTS.length - 2 ? 'md:border-b-0' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <FieldDot color={field.color} />
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
                    {a.code} · {field.ko}
                  </span>
                </div>
                <h2 className="mt-7 text-[1.5rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.75rem]">
                  {a.name}
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-ink-muted">{a.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {a.measures.map((m) => (
                    <span
                      key={m}
                      className="border border-edge px-3 py-1 text-[0.7rem] text-ink-muted"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="mt-10 text-sm font-medium text-pine-700">테스트 시작 →</p>
              </Link>
            );
          })}
        </div>
      </section>

      <Section tone="off" divider>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>안내</Eyebrow>
            <h2 className="mt-6 text-[1.6rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2rem]">
              단축형이 끝이 아닙니다.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink md:text-lg">
            <p>
              본 페이지의 진단은 COACHINGME의 정밀 컨설팅 도구를 7-8문항 분량으로 축약한 단축형입니다. 본인의 큰 좌표를
              확인하는 데 충분하지만, 의사결정을 위한 데이터로는 부족합니다.
            </p>
            <p>
              결과에서 진로·창업·이직·인성 어느 쪽이든 정밀한 분석이 필요하다는 신호가 나타나면, 컨설팅 단계로
              이어가는 것이 다음 단계입니다.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
