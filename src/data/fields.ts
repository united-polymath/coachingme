export type FieldKey = 'career' | 'entrepreneurship' | 'aptitude' | 'character';

export const FIELDS: {
  key: FieldKey;
  number: string;
  ko: string;
  en: string;
  tagline: string;
  description: string;
  color: string;
  category: 'execution' | 'analysis';
}[] = [
  {
    key: 'career',
    number: '01',
    ko: '취업/이직 컨설팅',
    en: 'Employment & Transition',
    tagline: '취업과 이직, 결정적인 순간을 함께 설계합니다.',
    description:
      '신입 취업부터 경력 이직, 직무 전환까지. 본인의 강점과 시장의 수요가 만나는 지점을 찾아 다음 단계를 함께 실행합니다.',
    color: '#B8623A',
    category: 'execution',
  },
  {
    key: 'entrepreneurship',
    number: '02',
    ko: '창업 컨설팅',
    en: 'Entrepreneurship',
    tagline: '비즈니스 모델, 운영 전략, 그리고 그 뒤의 사람을 다룹니다.',
    description:
      '예비 창업자와 초기 스타트업을 위한 비즈니스 모델 자문. 사업 전략만큼이나 창업자의 그릇을 단단히 다지는 작업에 무게를 둡니다.',
    color: '#C49A4A',
    category: 'execution',
  },
  {
    key: 'aptitude',
    number: '03',
    ko: '진로/적성 분석',
    en: 'Career & Aptitude Analysis',
    tagline: '당신에게 가장 잘 맞는 길을, 객관적으로 진단합니다.',
    description:
      '심리학·인지과학 기반의 진단 도구와 심층 인터뷰로 적성과 진로 가능성을 객관적 데이터로 시각화합니다.',
    color: '#6B8E7F',
    category: 'analysis',
  },
  {
    key: 'character',
    number: '04',
    ko: '인성/성향 분석',
    en: 'Character & Personality Analysis',
    tagline: '당신을 움직이는 본질적인 결을, 깊이 있게 읽어냅니다.',
    description:
      '다층적 심리 진단으로 평소엔 드러나지 않는 인성의 핵과 스트레스 상황의 행동 패턴, 그 뿌리의 가치 체계까지 정밀하게 분석합니다.',
    color: '#3D5A6C',
    category: 'analysis',
  },
];

export function fieldByKey(key: FieldKey) {
  return FIELDS.find((f) => f.key === key)!;
}
