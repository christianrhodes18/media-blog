import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')


const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      lightText: '#2D2C2E',
      lightBG: '#FFFFFF',
      darkText: '#F5F4F6',
      darkBG: '#2D2C2E',
      ...colors
    },
    screens: {
      'sm': '450px', //640 default
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse_limited': 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse_limited: {
          '0%, 100%' : { opacity: '1' },
          '50%': { opacity: '.5' },
        }
      }
    },
  },
  plugins: [],
}
export default config
