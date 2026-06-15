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
        // Warm neutral system — white canvas, warm ink, terracotta accent
        'kk-bg': '#FBFAF7',
        'kk-paper': '#FFFFFF',
        'kk-sand': '#F2ECE1',
        'kk-sand-deep': '#E8DFCF',
        'kk-ink': '#1C1714',
        'kk-graphite': '#4A423B',
        'kk-muted': '#8A8077',
        'kk-faint': '#B7AFA4',
        'kk-line': '#E5DDD0',
        'kk-clay': '#C2613A',
        'kk-clay-deep': '#A1492A',
        'kk-ochre': '#C2924E',
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
          '50%': { transform: 'translateY(-18px)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float-y 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
