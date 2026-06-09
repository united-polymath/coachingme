'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Eyebrow, FieldDot } from '@/components/Container';
import {
  INSIGHTS,
  insightDisplayCategory,
  type Insight,
  type InsightType,
} from '@/data/insights';
import { fieldByKey } from '@/data/fields';

type Filter = 'all' | InsightType;

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'article', label: '아티클' },
  { key: 'event', label: '행사' },
  { key: 'report', label: '리포트' },
  { key: 'interview', label: '인터뷰' },
];

export function InsightsList() {
  const [filter, setFilter] = useState<Filter>('all');

  const featured = INSIGHTS.find((i) => i.isFeatured) ?? INSIGHTS[0];

  const filtered = useMemo(() => {
    const rest = INSIGHTS.filter((i) => i.slug !== featured.slug);
    if (filter === 'all') return rest;
    return rest.filter((i) => i.type === filter);
  }, [filter, featured.slug]);

  const counts = useMemo(() => {
    const c: Record<Filter, number> = {
      all: INSIGHTS.length,
      article: 0,
      event: 0,
      report: 0,
      interview: 0,
    };
    INSIGHTS.forEach((i) => {
      c[i.type] += 1;
    });
    return c;
  }, []);

  return (
    <>
      <section className="border-b border-edge">
        <div className="container pt-20 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-4xl">
            <Eyebrow>인사이트</Eyebrow>
            <h1 className="mt-10 text-[2.2rem] font-bold leading-[1.25] tracking-tightest text-ink md:text-[3rem]">
              COACHINGME의 다양한 인사이트
              <br />
              <span className="text-pine-700">— 분야를 가로지르는 시야의 나눔</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[68px] z-40 border-b border-edge bg-paper/95 backdrop-blur-md md:top-[76px]">
        <div className="container flex items-center gap-2 overflow-x-auto py-4">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`shrink-0 border px-4 py-2 text-xs font-medium transition-colors ${
                  active
                    ? 'border-pine-700 bg-pine-700 text-paper'
                    : 'border-edge text-ink-muted hover:border-pine-700/40 hover:text-ink'
                }`}
              >
                {f.label}
                <span className={`ml-2 text-[0.65rem] ${active ? 'text-paper/70' : 'text-ink-subtle'}`}>
                  {counts[f.key]}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured hero card — only shown when filter is 'all' or matches type */}
      {(filter === 'all' || filter === featured.type) && (
        <section className="container py-12 md:py-16">
          <FeaturedCard insight={featured} />
        </section>
      )}

      {/* Grid */}
      <section className="container pb-24">
        {filtered.length === 0 ? (
          <div className="border border-edge bg-off py-20 text-center">
            <p className="text-sm text-ink-muted">해당 분류의 콘텐츠가 아직 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {filtered.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function FeaturedCard({ insight }: { insight: Insight }) {
  const field = fieldByKey(insight.field);
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ash md:aspect-[5/3]">
        <img
          src={insight.cover}
          alt=""
          loading="eager"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
          <TypeBadge type={insight.type} />
          {insight.isNew && (
            <span className="bg-pine-700 px-2.5 py-1 text-[0.6rem] font-bold tracking-wide2 text-paper">
              NEW
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <FieldDot color={field.color} />
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
            {insightDisplayCategory(insight)} · {field.ko}
          </span>
        </div>
        <h2 className="mt-5 text-[1.7rem] font-bold leading-tight tracking-tightest text-ink group-hover:text-pine-700 md:text-[2.2rem]">
          {insight.title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
          {insight.lead}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-subtle">
          <span>{insight.date}</span>
          {insight.location && (
            <>
              <span aria-hidden>·</span>
              <span>{insight.location}</span>
            </>
          )}
          {insight.readingTime && (
            <>
              <span aria-hidden>·</span>
              <span>{insight.readingTime}</span>
            </>
          )}
          {insight.presenter && (
            <>
              <span aria-hidden>·</span>
              <span>{insight.presenter}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  const field = fieldByKey(insight.field);
  return (
    <Link href={`/insights/${insight.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-ash">
        <img
          src={insight.cover}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <TypeBadge type={insight.type} />
          {insight.isNew && (
            <span className="bg-pine-700 px-2 py-0.5 text-[0.55rem] font-bold tracking-wide2 text-paper">
              NEW
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <FieldDot color={field.color} />
        <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
          {insightDisplayCategory(insight)} · {field.ko}
        </span>
      </div>
      <h3 className="mt-4 text-[1.15rem] font-semibold leading-snug tracking-tight text-ink group-hover:text-pine-700 md:text-[1.25rem]">
        {insight.title}
      </h3>
      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-muted">{insight.lead}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] text-ink-subtle">
        <span>{insight.date}</span>
        {insight.location && (
          <>
            <span aria-hidden>·</span>
            <span>{insight.location}</span>
          </>
        )}
        {insight.readingTime && (
          <>
            <span aria-hidden>·</span>
            <span>{insight.readingTime}</span>
          </>
        )}
        {insight.presenter && (
          <>
            <span aria-hidden>·</span>
            <span>{insight.presenter}</span>
          </>
        )}
      </div>
    </Link>
  );
}

function TypeBadge({ type }: { type: InsightType }) {
  const styles: Record<InsightType, string> = {
    article: 'bg-paper text-ink',
    event: 'bg-field-career text-paper',
    report: 'bg-field-aptitude text-paper',
    interview: 'bg-field-character text-paper',
  };
  const labels: Record<InsightType, string> = {
    article: 'ARTICLE',
    event: 'EVENT',
    report: 'REPORT',
    interview: 'INTERVIEW',
  };
  return (
    <span className={`px-2.5 py-1 text-[0.6rem] font-bold tracking-wide2 ${styles[type]}`}>
      {labels[type]}
    </span>
  );
}
