'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Section, Eyebrow } from '@/components/Container';

const STATS = [
  { label: 'COACHINGME와 함께하는 인재 수', sub: null, value: '248명+' },
  { label: '누적 1:1 컨설팅 케이스', sub: '글로벌 네트워크 합산', value: '2,326+' },
  { label: 'AI 에이전트가 학습한 데이터', sub: null, value: '10만+' },
  { label: '융합 컨설팅 만족도', sub: null, value: '90%+' },
];

type Parsed = { numeric: number | null; suffix: string; hasComma: boolean };

function parseValue(value: string): Parsed {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { numeric: null, suffix: value, hasComma: false };
  return {
    numeric: parseInt(match[1].replace(/,/g, ''), 10),
    suffix: match[2],
    hasComma: match[1].includes(','),
  };
}

function CountUp({
  target,
  suffix,
  hasComma,
  active,
  instant,
}: {
  target: number;
  suffix: string;
  hasComma: boolean;
  active: boolean;
  instant: boolean;
}) {
  const [val, setVal] = useState(instant ? target : 0);

  useEffect(() => {
    if (instant) {
      setVal(target);
      return;
    }
    if (!active) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, instant]);

  const formatted = hasComma ? val.toLocaleString('ko-KR') : String(val);
  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const instant = reduce === true;

  return (
    <Section tone="pine" className="!py-24 md:!py-32">
      <div ref={ref} className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
        <motion.div
          initial={instant ? false : { opacity: 0, y: 14 }}
          animate={inView || instant ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow tone="paper">By the numbers</Eyebrow>
          <h2 className="mt-6 text-[2rem] font-bold leading-[1.15] tracking-tightest md:text-[3rem]">
            숫자로 보는
            <br />
            COACHINGME
          </h2>
        </motion.div>

        <ul className="border-b border-paper/15">
          {STATS.map((s, i) => {
            const parsed = parseValue(s.value);
            return (
              <motion.li
                key={i}
                initial={instant ? false : { opacity: 0, y: 18 }}
                animate={inView || instant ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: instant ? 0 : 0.18 + i * 0.12,
                }}
                className="grid grid-cols-[1fr_auto] items-center gap-6 border-t border-paper/15 py-7 md:py-9"
              >
                <div>
                  <p className="text-sm font-medium text-paper md:text-base">{s.label}</p>
                  {s.sub && (
                    <p className="mt-1.5 text-xs text-paper/55 md:text-sm">{s.sub}</p>
                  )}
                </div>
                <p className="min-w-[5ch] text-right text-[2rem] font-bold leading-none tracking-tightest tabular-nums text-paper md:min-w-[7ch] md:text-[3rem]">
                  {parsed.numeric !== null ? (
                    <CountUp
                      target={parsed.numeric}
                      suffix={parsed.suffix}
                      hasComma={parsed.hasComma}
                      active={inView}
                      instant={instant}
                    />
                  ) : (
                    s.value
                  )}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
