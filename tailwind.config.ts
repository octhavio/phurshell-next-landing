import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Identidade Oficial Phurshell - Apenas 2 cores
        brand: {
          // Primary: Laranja
          orange: '#FF5100',
          'orange-light': '#FF6B2C',
          'orange-dark': '#E64900',
        },
        // Secondary: Dark (também usado como background)
        dark: {
          DEFAULT: '#19191A', // Secondary principal
          50: '#4A4A4B',
          100: '#3E3E3F',
          200: '#323233',
          300: '#262627',
          400: '#1F1F20',
          500: '#19191A', // Base
          600: '#141415',
          700: '#0F0F10',
          800: '#0A0A0B',
          900: '#050506',
        },
        // Aliases para facilitar
        primary: {
          DEFAULT: '#FF5100',
          light: '#FF6B2C',
          dark: '#E64900',
        },
        secondary: {
          DEFAULT: '#19191A',
          light: '#262627',
          dark: '#0F0F10',
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        display: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {
        'dots-pattern': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '20px 20px',
      },
      transitionProperty: {
        'smooth': 'transform, opacity, background-color, border-color, color, box-shadow',
      },
      borderRadius: {
        'button': '20px', // Valor intermediário entre 2xl (16px) e 3xl (24px)
      },
    },
  },
  plugins: [],
}
export default config
