import { ReactNode } from 'react';

type Tone = 'paper' | 'off' | 'pine';

export function Section({
  children,
  className = '',
  tone = 'paper',
  divider = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  divider?: boolean;
}) {
  const bg =
    tone === 'pine' ? 'bg-pine-700 text-paper' : tone === 'off' ? 'bg-off' : 'bg-paper';
  const border = divider ? 'border-t border-edge' : '';
  return (
    <section className={`${bg} ${border} py-20 md:py-28 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = 'pine',
}: {
  children: ReactNode;
  tone?: 'pine' | 'paper';
}) {
  return (
    <span
      className={`text-[0.7rem] font-semibold uppercase tracking-wide2 ${
        tone === 'paper' ? 'text-paper/65' : 'text-pine-700'
      }`}
    >
      {children}
    </span>
  );
}

export function FieldDot({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}
