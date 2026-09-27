/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#070A11',
        surface: {
          1: '#0D1322',
          2: '#151E33',
          3: '#1E2B48',
          glass: 'rgba(13, 19, 34, 0.75)',
        },
        brand: {
          primary: '#6366F1',
          'primary-hover': '#4F46E5',
          secondary: '#06B6D4',
          'secondary-hover': '#0891B2',
          accent: '#F43F5E',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          highlight: 'rgba(99, 102, 241, 0.4)',
        }
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(99, 102, 241, 0.45)',
        'glow-secondary': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
        'glow-accent': '0 0 25px -5px rgba(244, 63, 94, 0.45)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
