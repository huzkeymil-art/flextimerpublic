import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kk-bg': '#060506',
        'kk-surface': '#0F0E10',
        'kk-card': '#141215',
        'kk-gold': '#C8A84B',
        'kk-gold-light': '#E4CC7A',
        'kk-gold-dark': '#9A7D33',
        'kk-ink': '#EDE8E3',
        'kk-muted': '#9A9491',
        'kk-dim': '#5C5956',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        float: 'float-y 7s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'draw-line': 'draw-line 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}
export default config
