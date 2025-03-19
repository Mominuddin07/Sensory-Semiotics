/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pulse: {
          '0%, 100%': { 
            transform: 'scale(1)', 
            opacity: '0.5' 
          },
          '50%': { 
            transform: 'scale(1.1)', 
            opacity: '0.8' 
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float-particle': {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.5'
          },
          '100%': {
            transform: 'translateY(-100px) scale(0)',
            opacity: '0'
          }
        },
        'circle-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'circle-float': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -20px)' }
        },
        'circle-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.2)', opacity: '0.6' }
        }
      },
      animation: {
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'pulse-slower': 'pulse 10s ease-in-out infinite',
        'float': 'float 20s ease-in-out infinite',
        'spin': 'spin 40s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'float-particle': 'float-particle 3s linear infinite',
        'circle-spin': 'circle-spin 20s linear infinite',
        'circle-float': 'circle-float 8s ease-in-out infinite',
        'circle-pulse': 'circle-pulse 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}