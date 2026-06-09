import Link from 'next/link';
import { Section, Eyebrow, FieldDot } from '@/components/Container';
import { EDUCATION } from '@/data/education';
import { fieldByKey } from '@/data/fields';

export const metadata = {
  title: '교육 — COACHINGME Korea',
  description: 'COACHINGME Korea가 운영하는 워크숍·집중 과정·기업 출강 프로그램.',
};

export default function EducationPage() {
  const kr = EDUCATION.filter((e) => e.region === 'KR');
  const global = EDUCATION.filter((e) => e.region === 'GLOBAL');

  return (
    <>
      <section className="border-b border-edge">
        <div className="container pt-20 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-4xl">
            <Eyebrow>교육</Eyebrow>
            <h1 className="mt-10 text-[2.2rem] font-bold leading-[1.2] tracking-tightest text-ink md:text-[3.4rem]">
              컨설팅이 만들어내는
              <br />
              <span className="text-pine-700">시야를 직접 배웁니다.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              COACHINGME의 컨설턴트들이 실제로 사용하는 프레임과 진단 도구를, 같은 자리에서 직접 다루는 자리입니다.
              국내 워크숍·집중 과정과 해외 채프터에서 운영하는 글로벌 프로그램이 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-20">
        <div className="flex items-baseline justify-between border-b border-edge pb-5">
          <h2 className="text-base font-semibold text-ink">국내 · Korea</h2>
          <span className="text-xs text-ink-subtle">서울 · 강원 · 고객사 출강</span>
        </div>
        <div className="grid md:grid-cols-2">
          {kr.map((e, i) => (
            <EducationCard key={e.slug} education={e} idx={i} total={kr.length} />
          ))}
        </div>
      </section>

      <section className="container pt-24">
        <div className="flex items-baseline justify-between border-b border-edge pb-5">
          <h2 className="text-base font-semibold text-ink">해외 · Global Chapters</h2>
          <span className="text-xs text-ink-subtle">Singapore · London · Tokyo</span>
        </div>
        <div className="grid md:grid-cols-2">
          {global.map((e, i) => (
            <EducationCard key={e.slug} education={e} idx={i} total={global.length} />
          ))}
        </div>
      </section>

      <Section tone="off" className="mt-24" divider>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>운영 방식</Eyebrow>
            <h2 className="mt-6 text-[1.6rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2rem]">
              소규모, 비공개,
              <br />
              실제 사례 기반.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink md:text-lg">
            <p>
              모든 COACHINGME 교육은 회당 12~20명 규모로 운영됩니다. 이론보다 실제 컨설팅 사례를 함께 다루며, 외부
              공개는 하지 않습니다.
            </p>
            <p>
              참가 신청은 본 페이지 또는 문의를 통해 받으며, 일부 과정은 본인의 분야 적합성 검토 후 합류가 결정됩니다.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="max-w-2xl">
          <Eyebrow>기업 출강</Eyebrow>
          <h2 className="mt-6 text-[1.9rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2.6rem]">
            조직 단위로
            <br />
            진행하는 과정도 있습니다.
          </h2>
          <p className="mt-6 max-w-lg text-ink-muted">
            HR팀 대상 인성·성향 진단 워크숍, 임원진 대상 융합 리더십 인텐시브 등 기업 맞춤형 출강 과정을
            운영합니다. 일정과 구성은 문의 후 협의합니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-pine-700 px-7 py-3.5 text-sm font-medium text-paper hover:bg-pine-800"
          >
            출강 문의
          </Link>
        </div>
      </Section>
    </>
  );
}

function EducationCard({
  education: e,
  idx,
  total,
}: {
  education: (typeof EDUCATION)[number];
  idx: number;
  total: number;
}) {
  const field = fieldByKey(e.field);
  const isLeft = idx % 2 === 0;
  const lastRow = idx >= total - (total % 2 === 0 ? 2 : 1);
  return (
    <article
      className={`flex flex-col border-edge p-10 md:p-12 ${isLeft ? 'md:border-r' : ''} border-b ${lastRow ? 'md:border-b-0' : ''}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FieldDot color={field.color} />
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
            {e.format} · {field.ko}
          </span>
        </div>
        <span className="text-xs text-ink-subtle">{e.location}</span>
      </div>
      <h3 className="mt-6 text-[1.5rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.75rem]">
        {e.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{e.subtitle}</p>

      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-edge pt-6 text-xs">
        <div>
          <dt className="text-ink-subtle">기간</dt>
          <dd className="mt-1 text-ink">{e.duration}</dd>
        </div>
        <div>
          <dt className="text-ink-subtle">대상</dt>
          <dd className="mt-1 text-ink">{e.audience}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-ink-subtle">일정</dt>
          <dd className="mt-1 text-ink">{e.schedule}</dd>
        </div>
      </dl>

      <p className="mt-8 text-sm leading-relaxed text-ink-muted">{e.description}</p>

      <div className="mt-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
          이수 후 결과물
        </p>
        <ul className="mt-3 space-y-2 text-sm text-ink-muted">
          {e.outcomes.map((o) => (
            <li key={o} className="flex gap-3">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-pine-500" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/contact?education=${e.slug}`}
        className="mt-auto pt-10 text-sm font-medium text-pine-700 hover:text-pine-800"
      >
        참가 문의 →
      </Link>
    </article>
  );
}
