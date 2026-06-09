import type { FieldKey } from './fields';

export type Education = {
  slug: string;
  title: string;
  subtitle: string;
  format: '워크숍' | '집중 과정' | '오픈 세미나' | '기업 출강';
  duration: string;
  location: string;
  region: 'KR' | 'GLOBAL';
  audience: string;
  field: FieldKey;
  description: string;
  outcomes: string[];
  schedule: string;
};

export const EDUCATION: Education[] = [
  {
    slug: 'convergent-lab-seoul',
    title: 'COACHINGME Convergent Lab',
    subtitle: '네 분야의 컨설턴트가 한 사례를 함께 다루는 3일 집중 워크숍',
    format: '워크숍',
    duration: '3일 (총 21시간)',
    location: '서울 성수',
    region: 'KR',
    audience: 'HR·인사 컨설턴트 / 진로 상담사 / 조직개발 담당자',
    field: 'aptitude',
    description:
      '단일 분야로는 풀리지 않던 실제 사례를 네 분야 컨설턴트가 동시에 분석합니다. 참가자는 본인의 전문 분야 바깥의 시야를 직접 체험합니다.',
    outcomes: [
      '복합 사례를 다분야 시각으로 진단하는 프레임 습득',
      '컨설턴트 간 협업 시나리오 4종 시뮬레이션',
      '본인 실무에 적용할 융합 진단 체크리스트 제공',
    ],
    schedule: '연 4회 (3월·6월·9월·12월)',
  },
  {
    slug: 'founders-reset',
    title: 'Founder’s Reset',
    subtitle: '데스밸리에 들어선 창업자를 위한 1박 2일 리트릿',
    format: '집중 과정',
    duration: '1박 2일',
    location: '강원 양양',
    region: 'KR',
    audience: '시드~시리즈 A 단계 창업자 / 12명 한정',
    field: 'entrepreneurship',
    description:
      '비즈니스 모델이 아닌 창업자 본인을 다루는 시간입니다. 인성·성향 분석과 창업 자문이 결합된 비공개 세션을 진행합니다.',
    outcomes: [
      '본인의 창업자 패턴 진단 결과 1:1 리뷰',
      '향후 12개월 운영 전략의 객관적 점검',
      '같은 단계 창업자와의 비공개 동기 그룹 형성',
    ],
    schedule: '연 2회 (5월·11월)',
  },
  {
    slug: 'career-architect',
    title: 'Career Architect',
    subtitle: '30-40대 직장인을 위한 4주 이직·전직 설계 과정',
    format: '집중 과정',
    duration: '4주 (주 1회, 총 12시간)',
    location: '서울 + 온라인 하이브리드',
    region: 'KR',
    audience: '경력 7년 이상 직장인 / 회당 20명',
    field: 'career',
    description:
      '단순 이직 코칭이 아닙니다. 본인의 시장 가치를 객관적으로 진단하고, 다음 10년의 커리어 구조를 함께 설계하는 과정입니다.',
    outcomes: [
      '시장 가치 진단서 1부',
      '재구성된 이력서·링크드인·포지셔닝 카피',
      '면접 시나리오 3종 및 협상 전략 가이드',
    ],
    schedule: '매월 개강',
  },
  {
    slug: 'talent-pattern-lab',
    title: 'Talent Pattern Lab',
    subtitle: '기업 HR팀 대상 인성·성향 진단 워크숍',
    format: '기업 출강',
    duration: '2일 (총 14시간)',
    location: '고객사 현장',
    region: 'KR',
    audience: '기업 HR·조직개발 부서',
    field: 'character',
    description:
      '구성원 성향 데이터를 단순 보고서가 아니라 운영 도구로 쓰는 법을 다룹니다. 팀 매트릭스 설계와 갈등 진단의 실제 워크플로를 실습합니다.',
    outcomes: [
      '자사 임직원 성향 매트릭스 초안',
      '팀 단위 갈등 진단 프로토콜',
      'HRBP 운영용 인성·성향 가이드라인',
    ],
    schedule: '상시 수주',
  },
  {
    slug: 'singapore-leadership-intensive',
    title: 'Singapore Leadership Intensive',
    subtitle: 'APAC 임원을 위한 5일 융합 리더십 인텐시브',
    format: '집중 과정',
    duration: '5일',
    location: 'Singapore',
    region: 'GLOBAL',
    audience: 'APAC 지역 임원 / 회당 16명',
    field: 'character',
    description:
      'COACHINGME 싱가포르 채프터가 주관합니다. 동아시아·동남아·인도 임원이 한 자리에 모여 본인의 리더십 패턴을 다국적 맥락에서 진단합니다.',
    outcomes: [
      '다국적 맥락에서의 리더십 패턴 분석',
      'Cross-cultural 갈등 사례 12종 케이스 스터디',
      'COACHINGME 글로벌 임원 네트워크 합류',
    ],
    schedule: '연 2회 (4월·10월), 영어 진행',
  },
  {
    slug: 'london-strategy-sprint',
    title: 'London Strategy Sprint',
    subtitle: '글로벌 커리어 리셋을 위한 런던 단기 집중 과정',
    format: '집중 과정',
    duration: '4일',
    location: 'London, UK',
    region: 'GLOBAL',
    audience: '글로벌 이직·해외 진출을 고려하는 시니어 / 회당 12명',
    field: 'career',
    description:
      'COACHINGME 런던 채프터가 운영합니다. 영국·EU 채용 시장 구조와 본인의 포지셔닝을 점검하고, 실제 헤드헌터·리크루터와의 비공개 라운드테이블이 포함됩니다.',
    outcomes: [
      'EU·UK 채용 시장 구조 진단',
      'CV·LinkedIn 영문 포지셔닝 재설계',
      '런던 시티 헤드헌터 비공개 라운드테이블 참여',
    ],
    schedule: '연 2회 (3월·9월), 영어 진행',
  },
  {
    slug: 'tokyo-org-culture-forum',
    title: 'Tokyo Org Culture Forum',
    subtitle: '한일 합작 법인을 위한 조직 문화 진단 포럼',
    format: '오픈 세미나',
    duration: '2일',
    location: 'Tokyo, Japan',
    region: 'GLOBAL',
    audience: '한일 합작·일본 진출 기업의 임원 및 HR',
    field: 'character',
    description:
      'COACHINGME 도쿄 채프터가 주관합니다. 한국과 일본 조직문화의 미묘한 결을 데이터로 가시화하고, 실제 갈등 사례를 다룹니다.',
    outcomes: [
      '한일 조직 행동 패턴 비교 데이터',
      '실제 합작 법인 갈등 사례 6종 분석',
      '한일 임원 네트워크 형성',
    ],
    schedule: '연 1회 (6월), 한국어·일본어 동시 진행',
  },
];

export function educationBySlug(slug: string) {
  return EDUCATION.find((e) => e.slug === slug);
}
