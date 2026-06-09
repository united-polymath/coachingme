import Link from 'next/link';
import { Section, Eyebrow, FieldDot } from '@/components/Container';
import { FIELDS } from '@/data/fields';
import { INSIGHTS, insightDisplayCategory } from '@/data/insights';
import { ASSESSMENTS } from '@/data/assessments';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FieldsSection />
      <ApproachSection />
      <AssessmentTeaser />
      <CoachTeaser />
      <InsightsTeaser />
      <ClosingCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-edge bg-paper">
      <div className="container pt-20 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-4xl">
          <Eyebrow>Convergent Consulting</Eyebrow>
          <h1 className="mt-10 text-[2.4rem] font-bold leading-[1.18] tracking-tightest text-ink md:text-[4rem]">
            단일 분야의 해답을 넘어,
            <br />
            <span className="text-pine-700">분야를 아우르는 방향</span>을 제시합니다.
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            취업, 창업, 진로, 인성
            <br />
            네 분야를 가로지르는 통합적 방향을 함께 설계합니다.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="bg-pine-700 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-pine-800"
            >
              상담 요청하기
            </Link>
            <Link
              href="/about"
              className="border border-edge px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-pine-700 hover:text-pine-700"
            >
              컨설팅 방식 알아보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConvergenceViz() {
  return (
    <svg
      viewBox="0 0 600 340"
      className="mx-auto w-full max-w-[600px]"
      role="img"
      aria-label="컨설팅과 진단 분석의 융합"
    >
      <circle
        cx="220"
        cy="170"
        r="150"
        fill="#446F35"
        fillOpacity="0.10"
        stroke="#446F35"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <circle
        cx="380"
        cy="170"
        r="150"
        fill="#446F35"
        fillOpacity="0.10"
        stroke="#446F35"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <text
        x="155"
        y="178"
        textAnchor="middle"
        fontSize="24"
        fontWeight="600"
        fill="#446F35"
        fontFamily="Pretendard, sans-serif"
        letterSpacing="-0.5"
      >
        컨설팅
      </text>
      <text
        x="445"
        y="178"
        textAnchor="middle"
        fontSize="24"
        fontWeight="600"
        fill="#446F35"
        fontFamily="Pretendard, sans-serif"
        letterSpacing="-0.5"
      >
        진단 분석
      </text>
    </svg>
  );
}

function FieldsSection() {
  const execution = FIELDS.filter((f) => f.category === 'execution');
  const analysis = FIELDS.filter((f) => f.category === 'analysis');

  return (
    <Section tone="paper">
      <ConvergenceViz />

      <div className="mx-auto mt-14 max-w-2xl text-center">
        <h2 className="text-[1.9rem] font-semibold leading-[1.3] tracking-tightest text-ink md:text-[2.4rem]">
          두 개의 실행 컨설팅,
          <br />두 개의 진단 분석
        </h2>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 md:gap-10">
        <FieldGroup label="실행 컨설팅" en="Consulting" fields={execution} />
        <FieldGroup label="진단 분석" en="Analysis" fields={analysis} />
      </div>
    </Section>
  );
}

function FieldGroup({
  label,
  en,
  fields,
}: {
  label: string;
  en: string;
  fields: typeof FIELDS;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 pb-5">
        <h3 className="text-base font-semibold text-ink">{label}</h3>
        <span className="text-xs text-ink-subtle">{en}</span>
      </div>
      <div className="space-y-4">
        {fields.map((f) => (
          <article
            key={f.key}
            className="border border-pine-700/15 bg-pine-700/8 p-7 transition-all duration-300 hover:border-pine-700/40 hover:bg-pine-700/12 md:p-8"
          >
            <div className="flex items-center gap-3">
              <FieldDot color={f.color} />
              <span className="text-[0.7rem] font-medium uppercase tracking-wide2 text-ink-subtle">
                {f.number} · {f.en}
              </span>
            </div>
            <h4 className="mt-4 text-[1.25rem] font-semibold tracking-tight text-ink">{f.ko}</h4>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">{f.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ApproachSection() {
  const items = [
    {
      n: '01',
      label: 'Single',
      ko: '단일 분야 집중',
      desc: '4개 분야 중 한 분야의 전문 컨설팅. 고민이 명확히 한 분야에 속할 때.',
    },
    {
      n: '02',
      label: 'Composite',
      ko: '다분야 협업',
      desc: '두 분야 이상 컨설턴트의 협업. 여러 분야가 얽힌 고민일 때.',
    },
    {
      n: '03',
      label: 'Convergent',
      ko: '전면적 통합 설계',
      desc: '다분야 팀이 통합 방향을 함께 설계. 인생·조직·정책의 큰 방향이 필요할 때.',
    },
  ];
  return (
    <Section tone="off" divider>
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <Eyebrow>컨설팅의 깊이</Eyebrow>
          <h2 className="mt-6 text-[1.9rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2.6rem]">
            고민의 결에 맞춰
            <br />
            세 가지 깊이로 접근합니다.
          </h2>
          <p className="mt-6 max-w-md text-ink-muted">
            COACHINGME만의 전문 분석을 통해 가장 적합한 전문가 또는 팀을 매칭합니다.
          </p>
        </div>

        <div>
          {items.map((it) => (
            <div
              key={it.label}
              className="grid grid-cols-[50px_1fr] gap-6 border-t border-edge py-8 md:grid-cols-[80px_1fr] md:gap-10 md:py-10"
            >
              <span className="text-sm font-medium text-ink-subtle">{it.n}</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                    {it.label}
                  </h3>
                  <span className="text-sm text-ink-muted">{it.ko}</span>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function AssessmentTeaser() {
  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-8 border-b border-edge pb-10">
        <div className="max-w-xl">
          <Eyebrow>진단 도구</Eyebrow>
          <h2 className="mt-6 text-[1.9rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2.6rem]">
            먼저, 본인의 좌표를
            <br />
            데이터로 확인합니다.
          </h2>
        </div>
        <Link
          href="/assessment"
          className="text-sm font-medium text-pine-700 hover:text-pine-800"
        >
          진단 전체 보기 →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {ASSESSMENTS.map((a, i) => {
          const field = FIELDS.find((f) => f.key === a.field)!;
          return (
            <Link
              key={a.slug}
              href={`/assessment/${a.slug}`}
              className={`group flex flex-col border-edge p-8 transition-colors hover:bg-off md:p-10 ${
                i < 2 ? 'sm:border-r' : 'lg:border-r last:border-r-0'
              } border-b last:border-b-0 sm:border-b ${
                i < 2 ? 'sm:border-b' : 'sm:border-b-0'
              } lg:border-b-0`}
            >
              <div className="flex items-center gap-2">
                <FieldDot color={field.color} />
                <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
                  {a.code}
                </span>
              </div>
              <h3 className="mt-6 text-[1.1rem] font-semibold tracking-tight text-ink">
                {a.name}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm text-ink-muted">{a.summary}</p>
              <p className="mt-8 text-xs font-medium text-pine-700">진단하러 가기 →</p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

function CoachTeaser() {
  return (
    <Section tone="off" divider>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <div>
          <Eyebrow>코치진</Eyebrow>
          <h2 className="mt-6 text-[1.9rem] font-semibold leading-[1.3] tracking-tightest text-ink md:text-[2.4rem]">
            코칭에 최적화된 진단 도구를 기반으로
            <br />
            <span className="text-pine-700">데이터 기반의 코칭</span>을 진행합니다.
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-10 border-t border-edge pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-2">
          <p className="text-ink-muted md:text-base">
            한국과 해외의 검증된 컨설턴트가 한 단체 안에서 함께 일합니다. 각자의 분야 안에서 다년간 축적된 사례
            데이터를 토대로, 추상적 조언이 아닌 실행 가능한 방향을 제시합니다.
          </p>
          <div>
            <Link
              href="/coach"
              className="inline-block bg-pine-700 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-pine-800"
            >
              코치진 만나보기 →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

function InsightsTeaser() {
  const recent = INSIGHTS.slice(0, 3);
  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-edge pb-10">
        <div className="max-w-md">
          <Eyebrow>인사이트</Eyebrow>
          <h2 className="mt-6 text-[1.9rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2.6rem]">
            분야를 가로지르며
            <br />
            발견한 것들.
          </h2>
        </div>
        <Link
          href="/insights"
          className="text-sm font-medium text-pine-700 hover:text-pine-800"
        >
          전체 인사이트 →
        </Link>
      </div>

      <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
        {recent.map((it) => {
          const field = FIELDS.find((f) => f.key === it.field)!;
          return (
            <Link key={it.slug} href={`/insights/${it.slug}`} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-ash">
                <img
                  src={it.cover}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <FieldDot color={field.color} />
                <span className="text-[0.65rem] font-medium uppercase tracking-wide2 text-ink-subtle">
                  {insightDisplayCategory(it)} · {field.ko}
                </span>
              </div>
              <h3 className="mt-4 text-[1.2rem] font-semibold leading-snug tracking-tight text-ink group-hover:text-pine-700 md:text-[1.35rem]">
                {it.title}
              </h3>
              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-muted">{it.lead}</p>
              <p className="mt-5 text-xs text-ink-subtle">
                {it.date}
                {it.readingTime ? ` · ${it.readingTime}` : ''}
                {it.location ? ` · ${it.location}` : ''}
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

function ClosingCTA() {
  return (
    <Section tone="pine" className="!py-24 md:!py-32">
      <div className="max-w-2xl">
        <Eyebrow tone="paper">시작하기</Eyebrow>
        <h2 className="mt-6 text-[2rem] font-semibold leading-[1.2] tracking-tightest md:text-[3rem]">
          코칭이 필요한 순간,
          <br />
          COACHINGME와 함께하세요.
        </h2>
        <p className="mt-8 max-w-xl text-paper/75 md:text-lg">
          전문가 그룹이 직접 검토하여 고객의 상황에 가장 적합한 컨설턴트 또는 전담 팀을 배정합니다.
          <br className="hidden md:block" />
          R&D 센터를 통해 축적한 코칭 데이터를 활용해 맞춤형 코칭 솔루션을 제공합니다.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-block bg-paper px-7 py-3.5 text-sm font-medium text-pine-700 transition-colors hover:bg-paper/90"
        >
          상담 요청하기
        </Link>
      </div>
    </Section>
  );
}
