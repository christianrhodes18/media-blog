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
      lightTextAccent: '#6C6C6C',
      lightBG: '#FFFFFF',
      lightBGAccent: '#F5F4F6',
      darkText: '#F5F4F6',
      darkTextAccent: '#9CA3AF',
      darkBG: '#161616',
      darkBGAccent: "#2D2C2E",
      //primaryPurple: "#B598C3",
      primaryPurple: "#A78BFA",
      ...colors
    },
    screens: {
      'sm': '600px', //640 default
      'md': '768px', //768 default
      'lg': '1024px', //1024 default
      'xl': '1280px', //1280 default
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
