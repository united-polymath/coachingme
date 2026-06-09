'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Assessment, ResultBand } from '@/data/assessments';

type Phase = 'intro' | 'running' | 'result';

export function AssessmentRunner({
  assessment,
  fieldColor,
}: {
  assessment: Assessment;
  fieldColor: string;
}) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  const total = assessment.questions.length;
  const sum = useMemo(() => scores.reduce((a, b) => a + b, 0), [scores]);
  const maxScore = total * 4;

  const sortedBands = useMemo(
    () => [...assessment.resultBands].sort((a, b) => a.min - b.min),
    [assessment.resultBands],
  );

  const band = useMemo(() => {
    const desc = [...sortedBands].reverse();
    return desc.find((b) => sum >= b.min) ?? sortedBands[0];
  }, [sum, sortedBands]);

  const bandIndex = sortedBands.findIndex((b) => b === band);

  function pick(weight: number) {
    const next = [...scores];
    next[idx] = weight;
    setScores(next);
    if (idx + 1 < total) {
      setIdx(idx + 1);
    } else {
      setPhase('result');
    }
  }

  function reset() {
    setIdx(0);
    setScores([]);
    setPhase('intro');
  }

  return (
    <div className={`mx-auto ${phase === 'result' ? 'max-w-3xl' : 'max-w-2xl'}`}>
      <AnimatePresence mode="wait">
        {phase === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="border border-edge bg-paper p-8 md:p-12"
          >
            <h2 className="text-[1.6rem] font-semibold leading-snug tracking-tight text-ink md:text-[2rem]">
              간단 테스트 받아보기
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              총 {total}문항으로 구성된 테스트, 각 문항에 대해 5점 척도로 응답해주세요. 직관적으로 답한 결과가
              가장 정확합니다. 평소가 아닌 본인의 가장 일반적인 상태를 기준으로 답해주세요.
            </p>
            <button
              type="button"
              onClick={() => setPhase('running')}
              className="mt-10 bg-pine-700 px-7 py-3.5 text-sm font-medium text-paper hover:bg-pine-800"
            >
              테스트 시작
            </button>
          </motion.div>
        )}

        {phase === 'running' && (
          <motion.div
            key={`q-${idx}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            className="border border-edge bg-paper p-8 md:p-12"
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
                {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="ml-6 h-px flex-1 bg-edge">
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${((idx + 1) / total) * 100}%`,
                    backgroundColor: fieldColor,
                  }}
                />
              </div>
            </div>

            <h3 className="mt-10 text-[1.3rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.55rem]">
              {assessment.questions[idx].text}
            </h3>

            <div className="mt-10 space-y-2">
              {assessment.questions[idx].options.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => pick(opt.weight)}
                  className="block w-full border border-edge px-5 py-4 text-left text-sm text-ink transition-colors hover:border-pine-700 hover:bg-off"
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {idx > 0 && (
              <button
                type="button"
                onClick={() => setIdx(idx - 1)}
                className="mt-8 text-xs text-ink-muted hover:text-pine-700"
              >
                ← 이전 문항
              </button>
            )}
          </motion.div>
        )}

        {phase === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <ResultHero
              band={band}
              sum={sum}
              maxScore={maxScore}
              bands={sortedBands}
              currentBandIndex={bandIndex}
              fieldColor={fieldColor}
            />

            <ResultSections sections={band.sections} fieldColor={fieldColor} />

            <PrecisionBox items={band.precisionItems} />

            <ClosingQuote text={band.closing} />

            <NextStepCTA code={assessment.code} />

            <div className="text-center">
              <button
                type="button"
                onClick={reset}
                className="text-xs text-ink-muted hover:text-pine-700"
              >
                다시 진단하기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultHero({
  band,
  sum,
  maxScore,
  bands,
  currentBandIndex,
  fieldColor,
}: {
  band: ResultBand;
  sum: number;
  maxScore: number;
  bands: ResultBand[];
  currentBandIndex: number;
  fieldColor: string;
}) {
  const scorePct = (sum / maxScore) * 100;
  return (
    <div className="border border-edge bg-paper p-8 md:p-12">
      <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
        진단 결과
      </p>
      <h2 className="mt-4 text-[2rem] font-bold leading-tight tracking-tightest text-ink md:text-[2.6rem]">
        {band.title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
        {band.summary}
      </p>

      <div className="mt-10 border-t border-edge pt-8">
        <div className="flex items-baseline justify-between">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
            점수 위치
          </span>
          <span className="text-sm text-ink">
            <span className="text-2xl font-bold tracking-tightest text-pine-700">{sum}</span>
            <span className="text-ink-subtle"> / {maxScore}</span>
          </span>
        </div>

        <div className="relative mt-6 h-1.5 bg-edge">
          <div
            className="absolute left-0 top-0 h-full transition-all"
            style={{ width: `${scorePct}%`, backgroundColor: fieldColor }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `${scorePct}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span
              className="block h-3 w-3 rounded-full ring-4 ring-paper"
              style={{ backgroundColor: fieldColor }}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-[0.7rem] tracking-tight">
          {bands.map((b, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i === 0 ? 'items-start' : i === bands.length - 1 ? 'items-end' : 'items-center'
              }`}
            >
              <span
                className={`text-[0.7rem] font-medium ${
                  i === currentBandIndex ? 'text-pine-700' : 'text-ink-subtle'
                }`}
              >
                {b.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultSections({
  sections,
  fieldColor,
}: {
  sections: ResultBand['sections'];
  fieldColor: string;
}) {
  return (
    <div className="space-y-4">
      {sections.map((s, i) => (
        <article
          key={i}
          className="border border-edge bg-paper p-8 md:p-10"
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tabular-nums text-pine-700">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-ink-subtle">
              {s.label}
            </span>
          </div>
          <h3 className="mt-5 text-[1.35rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.55rem]">
            {s.heading}
          </h3>
          <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink md:text-base">
            {s.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
          {s.points && s.points.length > 0 && (
            <ul className="mt-7 space-y-3 border-t border-edge pt-6">
              {s.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-ink-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: fieldColor }}
                    aria-hidden
                  />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function PrecisionBox({ items }: { items: string[] }) {
  return (
    <div className="bg-pine-700 p-8 text-paper md:p-12">
      <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-paper/60">
        Precision Analysis
      </p>
      <h3 className="mt-4 text-[1.4rem] font-semibold leading-snug tracking-tight md:text-[1.7rem]">
        정밀 진단에서 다루는 영역
      </h3>
      <ul className="mt-8 grid gap-3 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-paper/85">
            <span className="mt-2 h-px w-4 shrink-0 bg-paper/50" aria-hidden />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingQuote({ text }: { text: string }) {
  return (
    <div className="border-l-2 border-pine-700 bg-off py-7 pl-7 pr-8">
      <p className="text-[1.15rem] font-semibold leading-snug tracking-tight text-pine-700 md:text-[1.3rem]">
        “{text}”
      </p>
    </div>
  );
}

function NextStepCTA({ code }: { code: string }) {
  return (
    <div className="border border-edge bg-paper p-8 md:p-10">
      <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-pine-700">
        다음 단계
      </p>
      <h3 className="mt-4 text-[1.3rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.5rem]">
        단축형의 큰 좌표에서 정밀한 데이터로
      </h3>
      <p className="mt-5 text-sm leading-relaxed text-ink-muted md:text-base">
        본 단축형 진단은 큰 좌표를 그려주는 출발점입니다. 의사결정에 쓰기 위한 정밀한 데이터는 1:1 컨설팅에서
        다층 진단과 심층 인터뷰를 통해 나옵니다. 본인의 상황을 알려주시면 가장 적합한 컨설턴트 또는 융합 팀을 직접
        매칭합니다.
      </p>
      <Link
        href={`/contact?assessment=${code}`}
        className="mt-7 inline-block bg-pine-700 px-7 py-3.5 text-sm font-medium text-paper hover:bg-pine-800"
      >
        컨설팅 신청하기 →
      </Link>
    </div>
  );
}
