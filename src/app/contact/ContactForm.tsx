'use client';

import { useState } from 'react';

const TIER = ['정부 및 공공기관', '기업 및 창업자', '개인', '선택하기 어려움'];
const FIELD = [
  '취업/이직 컨설팅',
  '창업 컨설팅',
  '진로/적성 분석',
  '인성/성향 분석',
  '여러 분야가 복합적으로 얽힘',
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent('[COACHINGME 상담 요청]');
    const lines = [
      `고객 유형: ${fd.get('tier')}`,
      `가까운 고민 분야: ${fd.get('field')}`,
      `성함 또는 기업명: ${fd.get('name')}`,
      `이메일: ${fd.get('email')}`,
      '',
      '문의 내용:',
      String(fd.get('message') ?? ''),
    ].join('\n');
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:inquiry@coachingme.kr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-edge bg-off p-10">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-pine-700">접수됨</p>
        <h2 className="mt-4 text-[1.5rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.85rem]">
          이메일 클라이언트로 이동했습니다.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          내용을 확인 후 발송해주세요. 영업일 기준 2일 이내 담당 전문가가 직접 회신드립니다.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-xs text-ink-muted hover:text-pine-700"
        >
          ← 다시 작성하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <Field label="어떤 분이신가요?" required>
        <select name="tier" required className={inputCls} defaultValue="">
          <option value="" disabled>
            고객 유형을 선택해주세요
          </option>
          {TIER.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="어떤 분야에 가깝나요?" required>
        <select name="field" required className={inputCls} defaultValue="">
          <option value="" disabled>
            고민 분야를 선택해주세요
          </option>
          {FIELD.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </Field>

      <Field label="성함 또는 기업명" required>
        <input name="name" type="text" required placeholder="입력해 주세요" className={inputCls} />
      </Field>

      <Field label="회신받으실 이메일" required>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputCls}
        />
      </Field>

      <Field label="현재의 고민 및 문의 사항" required>
        <textarea
          name="message"
          required
          rows={7}
          placeholder="어떤 상황에서 어떤 고민을 하고 계신지 솔직하고 편안하게 적어주세요. 구체적이지 않아도 충분히 상담 가능합니다."
          className={`${inputCls} resize-none`}
        />
      </Field>

      <div className="border-t border-edge pt-8">
        <button
          type="submit"
          className="bg-pine-700 px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-pine-800"
        >
          상담 요청 보내기
        </button>
        <p className="mt-6 text-xs text-ink-subtle">
          보내주신 내용은 영업일 기준 2일 이내에 담당 전문가가 검토 후 직접 회신드립니다.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-pine-700">*</span>}
      </span>
      <div className="mt-3">{children}</div>
    </label>
  );
}

const inputCls =
  'block w-full border border-edge bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-subtle focus:border-pine-700 focus:outline-none';
