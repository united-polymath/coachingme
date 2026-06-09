import Link from 'next/link';
import { Section, Eyebrow, FieldDot } from '@/components/Container';
import { COACHES, type Coach } from '@/data/coaches';
import { FIELDS, fieldByKey } from '@/data/fields';

export const metadata = {
  title: 'Coach — COACHINGME Korea',
  description: '한국과 해외의 검증된 COACHINGME 코치진을 만나보세요.',
};

export default function CoachPage() {
  const kr = COACHES.filter((c) => c.region === 'KR');
  const global = COACHES.filter((c) => c.region === 'GLOBAL');

  return (
    <>
      <section className="border-b border-edge">
        <div className="container pt-20 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-4xl">
            <Eyebrow>코치진</Eyebrow>
            <h1 className="mt-10 text-[1.8rem] font-bold leading-[1.3] tracking-tightest text-ink md:text-[2.6rem]">
              COACHINGME Korea는 분야별 전문가들과 함께
              <br />
              <span className="text-pine-700">데이터 기반의 코칭</span>을 진행합니다.
            </h1>
            <figure className="mt-12 max-w-2xl border-l-2 border-pine-700 pl-6">
              <blockquote className="text-lg leading-relaxed text-ink md:text-xl">
                “Coaching is unlocking a person’s potential to maximize their own performance.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-ink-subtle">
                — Sir John Whitmore
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-edge pt-6">
            <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
              전문 분야
            </span>
            {FIELDS.map((f) => (
              <span key={f.key} className="flex items-center gap-2 text-xs text-ink-muted">
                <FieldDot color={f.color} />
                {f.ko}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container pt-20 md:pt-28">
        <div className="max-w-3xl">
          <h2 className="text-[1.9rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2.6rem]">
            <span className="text-pine-700">글로벌 코칭 전문가</span>를 만나보세요.
          </h2>
        </div>

        <div className="mt-14 flex items-baseline justify-between border-b border-edge pb-5">
          <h3 className="text-base font-semibold text-ink">한국 · Korea</h3>
          <span className="text-xs text-ink-subtle">서울</span>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
          {kr.map((c) => (
            <CoachCard key={c.id} coach={c} />
          ))}
        </div>
      </section>

      <section className="container pt-24">
        <div className="flex items-baseline justify-between border-b border-edge pb-5">
          <h3 className="text-base font-semibold text-ink">글로벌 · Global Network</h3>
          <span className="text-xs text-ink-subtle">San Francisco · Berlin · Tokyo · London · Paris · Singapore</span>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
          {global.map((c) => (
            <CoachCard key={c.id} coach={c} />
          ))}
        </div>
      </section>

      <Section tone="off" className="mt-24" divider>
        <div className="max-w-2xl">
          <Eyebrow>컨설팅 신청</Eyebrow>
          <h2 className="mt-6 text-[1.9rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2.6rem]">
            본인에게 맞는 코치와
            <br />
            <span className="text-pine-700">다음 한 걸음을 설계하세요.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
            분야와 상황을 알려주시면, 분야별 전문가가 직접 검토하여 가장 적합한 컨설턴트 또는 융합 팀을 매칭합니다.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-pine-700 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-pine-800"
          >
            컨설팅 신청하기 →
          </Link>
        </div>
      </Section>
    </>
  );
}

function CoachCard({ coach }: { coach: Coach }) {
  const field = fieldByKey(coach.field);
  return (
    <article className="flex flex-col border-b border-edge py-8 md:border-l md:px-8 md:[&:nth-child(odd)]:border-l-0 md:[&:nth-child(-n+2)]:border-t md:[&:nth-child(-n+2)]:border-edge">
      <div className="flex items-center gap-2">
        <FieldDot color={field.color} />
        <span className="text-[0.65rem] font-medium uppercase tracking-wide2 text-ink-subtle">
          {field.ko}
        </span>
      </div>

      <div className="mt-4 flex items-baseline gap-2.5">
        <h4 className="text-[1.15rem] font-semibold tracking-tight text-ink">{coach.name}</h4>
        <span className="text-xs text-ink-subtle">{coach.nameEn}</span>
      </div>

      <p className="mt-2 text-sm font-medium text-pine-700">{coach.title}</p>
      <p className="mt-0.5 text-xs text-ink-subtle">{coach.location}</p>

      <p className="mt-4 text-[0.83rem] leading-relaxed text-ink-muted">{coach.bio}</p>

      <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
        {coach.credentials.map((cr) => (
          <li
            key={cr}
            className="border border-edge px-2.5 py-1 text-[0.68rem] leading-none text-ink-muted"
          >
            {cr}
          </li>
        ))}
      </ul>
    </article>
  );
}
