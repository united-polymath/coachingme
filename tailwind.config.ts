import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2.5rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        paper: '#FFFFFF',
        off: '#FAFAF8',
        ash: '#F2F2EE',
        edge: '#E5E7E2',
        ink: {
          DEFAULT: '#0B1410',
          muted: '#4A5450',
          subtle: '#8A938E',
        },
        pine: {
          50:  '#F0F6EE',
          100: '#DBEBD6',
          300: '#89BB77',
          500: '#568E43',
          700: '#446F35',
          800: '#345B27',
          900: '#27451C',
        },
        field: {
          career: '#B8623A',
          entrepreneurship: '#C49A4A',
          aptitude: '#6B8E7F',
          character: '#3D5A6C',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.18em',
        tightest: '-0.025em',
      },
      maxWidth: { prose: '38rem' },
      opacity: { 8: '0.08', 12: '0.12', 15: '0.15' },
    },
  },
  plugins: [],
};

export default config;
