/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1322',
          900: '#101D32', // Deep navy
          800: '#192B43', // Secondary navy
          700: '#223A5B',
          600: '#2F4E79',
          100: '#E4EBF5',
          50: '#F0F4FA',
        },
        copper: {
          DEFAULT: '#B87548', // Copper
          dark: '#9B5B32',
          light: '#CE8B5F',
          50: '#FBF5F1',
          100: '#F6EBE2',
          200: '#EAC8B1',
          600: '#B87548',
          700: '#9B5B32',
        },
        ice: {
          DEFAULT: '#0077C8',
          light: '#E0F2FE',
          dark: '#0369A1',
        },
        surface: {
          warm: '#F8F9FB',
          light: '#EEF1F5',
          card: '#FFFFFF',
          dark: '#172033',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(16, 29, 50, 0.06)',
        'hover': '0 12px 30px -4px rgba(16, 29, 50, 0.12)',
        'card': '0 1px 3px rgba(16, 29, 50, 0.05), 0 10px 25px -5px rgba(16, 29, 50, 0.04)',
      }
    },
  },
  plugins: [],
}
