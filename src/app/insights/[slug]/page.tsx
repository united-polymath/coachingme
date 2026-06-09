import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FieldDot } from '@/components/Container';
import {
  INSIGHTS,
  insightBySlug,
  insightDisplayCategory,
  type Insight,
} from '@/data/insights';
import { fieldByKey } from '@/data/fields';

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const it = insightBySlug(slug);
  if (!it) return {};
  return {
    title: `${it.title} — COACHINGME Insights`,
    description: it.lead.slice(0, 140),
  };
}

export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const it = insightBySlug(slug);
  if (!it) notFound();
  const field = fieldByKey(it.field);

  const related = INSIGHTS.filter((i) => i.slug !== it.slug && i.field === it.field).slice(0, 2);

  return (
    <>
      <div className="container pt-10 md:pt-14">
        <Link href="/insights" className="text-xs text-ink-muted hover:text-pine-700">
          ← 전체 인사이트
        </Link>
      </div>

      <header className="container pt-10 md:pt-14">
        <div>
          <div className="flex items-center gap-2">
            <FieldDot color={field.color} />
            <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
              {insightDisplayCategory(it)} · {field.ko}
            </span>
          </div>
          <h1 className="mt-6 text-[2.2rem] font-bold leading-tight tracking-tightest text-ink md:text-[3.2rem]">
            {it.title}
          </h1>
          <MetaBar insight={it} />
        </div>
      </header>

      <div className="container mt-12 md:mt-16">
        <div className="flex justify-center overflow-hidden bg-ash">
          <img
            src={it.cover}
            alt=""
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>
      </div>

      <article className="container pt-14 pb-12 md:pt-20">
        <p className="text-lg leading-relaxed text-ink md:text-xl">{it.lead}</p>

        <div className="mt-14 space-y-7 text-base leading-[1.85] text-ink md:text-[1.12rem]">
          {it.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <blockquote className="mt-16 border-l-2 border-pine-700 bg-off py-6 pl-7 pr-8 text-[1.35rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.6rem]">
          “{it.pullQuote}”
        </blockquote>
      </article>

      <section className="container pb-20">
        <div className="bg-pine-700 px-8 py-14 text-paper md:px-12 md:py-16">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-paper/60">
            {ctaEyebrow(it.type)}
          </p>
          <h2 className="mt-4 max-w-2xl text-[1.5rem] font-semibold leading-snug tracking-tight md:text-[2rem]">
            {ctaHeading(it.type)}
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-paper px-6 py-3 text-sm font-medium text-pine-700 hover:bg-paper/90"
          >
            상담 요청하기 →
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container pb-24">
          <h2 className="text-base font-semibold text-ink">같은 분야의 다른 콘텐츠</h2>
          <div className="mt-6 grid gap-x-12 gap-y-10 border-t border-edge pt-10 md:grid-cols-2">
            {related.map((r) => {
              const rf = fieldByKey(r.field);
              return (
                <Link key={r.slug} href={`/insights/${r.slug}`} className="group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ash">
                    <img
                      src={r.cover}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <FieldDot color={rf.color} />
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
                      {insightDisplayCategory(r)} · {rf.ko}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[1.2rem] font-semibold leading-snug tracking-tight text-ink group-hover:text-pine-700 md:text-[1.4rem]">
                    {r.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                    {r.lead}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

function MetaBar({ insight }: { insight: Insight }) {
  const parts: string[] = [insight.date];
  if (insight.location) parts.push(insight.location);
  if (insight.readingTime) parts.push(insight.readingTime);
  if (insight.presenter) parts.push(insight.presenter);
  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-subtle">
      {parts.map((p, i) => (
        <span key={i} className="flex items-center gap-3">
          {i > 0 && <span aria-hidden>·</span>}
          <span>{p}</span>
        </span>
      ))}
    </p>
  );
}

function ctaEyebrow(type: Insight['type']): string {
  switch (type) {
    case 'event':
      return '다음 기수에 참가하기';
    case 'report':
      return '리포트의 데이터를 활용하기';
    case 'interview':
      return '컨설턴트와 직접 만나기';
    case 'article':
    default:
      return '함께 고민하기';
  }
}

function ctaHeading(type: Insight['type']): string {
  switch (type) {
    case 'event':
      return '같은 자리의 다음 기수, 또는 비슷한 자리를 위한 1:1 상담이 가능합니다.';
    case 'report':
      return '리포트의 전체 데이터셋과 본인의 상황을 함께 다루는 정밀 컨설팅을 신청하세요.';
    case 'interview':
      return '인터뷰의 컨설턴트와 1:1 세션을 통해 본인의 사례를 직접 다뤄볼 수 있습니다.';
    case 'article':
    default:
      return '글에서 짚은 사례와 비슷한 고민이 있다면, 단체에 직접 들려주세요.';
  }
}
