import Link from 'next/link';
import { Section, Eyebrow } from '@/components/Container';
import { StatsSection } from './StatsSection';

export const metadata = {
  title: 'About — COACHINGME Korea',
  description: 'COACHINGME Korea의 정체성, 미션, 그리고 단체의 매니페스토.',
};

const VALUES = [
  {
    title: 'Depth in Each Field',
    ko: '분야의 깊이',
    body: '네 분야 각각에서 검증된 컨설턴트만이 COACHINGME에 합류합니다.',
  },
  {
    title: 'Wisdom Across Fields',
    ko: '분야를 가로지르는 지혜',
    body: '하나의 답이 아닌, 분야가 다른 전문가들의 통합적 시야를 제공합니다.',
  },
  {
    title: 'Curated, Not Listed',
    ko: '큐레이션, 단순 나열이 아닌',
    body: '고객을 풀에 던져두지 않습니다. 단체가 직접 분석하여 가장 적합한 전문가 또는 팀을 매칭합니다.',
  },
];

const MANIFESTO = [
  '단편적인 지식이나 정해진 정답을 팔지 않습니다.',
  '전문가 명단만 던져주고 고객에게 선택을 미루지 않습니다.',
  '복합적인 고민을 억지로 하나의 카테고리에 끼워 맞추지 않습니다.',
  '다양한 분야의 시각을 교차 분석하여 문제의 핵심을 짚어냅니다.',
  '가장 적합한 전문가 또는 융합 팀을 매칭합니다.',
  '고민 해결에 필요한 깊이만큼 정확하고 심도 있게 접근합니다.',
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-edge">
        <div className="container pt-20 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-4xl">
            <Eyebrow>About COACHINGME</Eyebrow>
            <h1 className="mt-10 text-[2.2rem] font-bold leading-[1.2] tracking-tightest text-ink md:text-[3.6rem]">
              여러 분야를 <span className="text-pine-700">잇다</span>
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              사람의 고민은 하나의 분야로 깔끔하게 나뉘지 않습니다. 취업·이직 안에는 진로와 적성의 이해가 숨어
              있고, 창업의 어려움 안에는 창업자의 인성과 성향이 함께 있습니다. COACHINGME는 그 한계를 넘기 위해
              만들어졌습니다.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      <Section tone="off">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>미션</Eyebrow>
            <h2 className="mt-6 text-[1.6rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2rem]">
              자신의 길에 맞는
              <br />
              통합적 안내를 받을 권리.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink md:text-lg">
            <p>모든 사람과 조직은 자신의 길에 맞는 통합적 안내를 받을 권리가 있습니다.</p>
            <p>
              COACHINGME는 취업·이직, 창업, 진로·적성, 인성·성향 분야의 검증된 컨설턴트를 하나의 네트워크로 연결합니다.
              단일 분야의 답을 넘어, 분야를 가로지르는 융합적 방향성을 제시하는 글로벌 단체입니다.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Eyebrow>핵심 가치</Eyebrow>
        <div className="mt-12 grid border-t border-edge md:grid-cols-3">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className={`py-10 md:px-10 ${i < 2 ? 'md:border-r border-edge' : ''} border-b border-edge md:border-b-0 ${i === 0 ? 'md:pl-0' : ''} ${i === 2 ? 'md:pr-0' : ''}`}
            >
              <span className="text-sm font-medium text-ink-subtle">0{i + 1}</span>
              <h3 className="mt-5 text-[1.25rem] font-semibold tracking-tight text-ink">{v.title}</h3>
              <p className="mt-1 text-sm text-ink-subtle">{v.ko}</p>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="off">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>COACHINGME Korea</Eyebrow>
            <h2 className="mt-6 text-[1.6rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2rem]">
              해외에서 검증된 모델을
              <br />
              이제 한국에서도
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink md:text-lg">
            <p>
              빠르게 변하는 사회에서 정부·기업·개인 모두가 더 통합적인 안내를 필요로 합니다. 그러나 한국에는 분야를
              넘나드는 융합 컨설팅 인프라가 아직 충분치 않습니다.
            </p>
            <p>
              COACHINGME Korea는 다양한 분야의 검증된 한국인 컨설턴트와 손잡고, 한국 사회가 필요로 하는 통합적 컨설팅의
              표준을 만들어가고자 합니다. 글로벌 본부의 네트워크와 함께, 해외 사례·진단 도구·교육 프로그램을 한국의
              맥락에 맞게 운영합니다.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Eyebrow>매니페스토</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-[1.9rem] font-semibold leading-[1.25] tracking-tightest text-ink md:text-[2.6rem]">
          COACHINGME의 약속
        </h2>
        <ol className="mt-14 max-w-3xl">
          {MANIFESTO.map((m, i) => (
            <li
              key={i}
              className="grid grid-cols-[50px_1fr] gap-6 border-t border-edge py-7 md:grid-cols-[80px_1fr]"
            >
              <span className="text-sm font-medium text-ink-subtle">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[1.05rem] leading-relaxed text-ink md:text-lg">{m}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="pine" className="!py-24">
        <div className="max-w-2xl">
          <h2 className="text-[1.9rem] font-semibold leading-[1.2] tracking-tightest md:text-[2.6rem]">
            COACHINGME와 함께할 분을 찾습니다.
          </h2>
          <p className="mt-6 max-w-lg text-paper/75">
            COACHINGME Korea는 분야별 검증된 컨설턴트와 늘 이야기 나누고 있습니다. 합류 또는 협업 제안은 언제든 환영합니다.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-paper px-7 py-3.5 text-sm font-medium text-pine-700 hover:bg-paper/90"
          >
            문의하기
          </Link>
        </div>
      </Section>
    </>
  );
}
