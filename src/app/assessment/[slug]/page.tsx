import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Eyebrow, FieldDot } from '@/components/Container';
import { ASSESSMENTS, assessmentBySlug } from '@/data/assessments';
import { fieldByKey } from '@/data/fields';
import { AssessmentRunner } from './AssessmentRunner';

export function generateStaticParams() {
  return ASSESSMENTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = assessmentBySlug(slug);
  if (!a) return {};
  return {
    title: `${a.name} — COACHINGME 진단`,
    description: a.summary,
  };
}

export default async function AssessmentDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = assessmentBySlug(slug);
  if (!a) notFound();
  const field = fieldByKey(a.field);

  return (
    <>
      <section className="border-b border-edge">
        <div className="container pt-16 pb-12 md:pt-24">
          <Link href="/assessment" className="text-xs text-ink-muted hover:text-pine-700">
            ← 진단 전체로
          </Link>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div>
              <div className="flex items-center gap-2">
                <FieldDot color={field.color} />
                <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
                  {a.code} · {field.ko}
                </span>
              </div>
              <h1 className="mt-6 text-[2rem] font-bold leading-tight tracking-tightest text-ink md:text-[3rem]">
                {a.name}
              </h1>
              <p className="mt-3 text-sm text-ink-subtle">{a.nameEn}</p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
                {a.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <aside className="border border-edge p-7">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
                이 진단은
              </p>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-subtle">문항 수</dt>
                  <dd className="text-ink">{a.questions.length}문항</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-subtle">관련 분야</dt>
                  <dd className="text-ink">{field.ko}</dd>
                </div>
              </dl>
              <div className="mt-6 border-t border-edge pt-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
                  측정 차원
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {a.measures.map((m) => (
                    <li key={m}>· {m}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <AssessmentRunner assessment={a} fieldColor={field.color} />
      </section>
    </>
  );
}
