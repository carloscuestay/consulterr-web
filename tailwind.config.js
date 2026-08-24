/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta institucional CONSULTERR — muestreada del logotipo de la minuta
        marina: {
          50: '#F4F8FC',
          100: '#EAF1F8',
          200: '#D2E2F1',
          300: '#B8D0E8',
          400: '#8FB3D6',
          500: '#5C8DB8',
          600: '#2E6DA4',
          700: '#255882',
          800: '#1A3F6B',
          900: '#132F50',
          950: '#0E1A26',
        },
        arena: {
          100: '#FBF7F0',
          200: '#F2E9D8',
          300: '#E3D2B0',
          400: '#C9A96A',
          500: '#B08C48',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      maxWidth: { content: '78rem' },
      boxShadow: {
        card: '0 1px 2px rgba(14,26,38,.04), 0 8px 24px -12px rgba(26,63,107,.18)',
        lift: '0 2px 4px rgba(14,26,38,.04), 0 24px 48px -20px rgba(26,63,107,.30)',
      },
      backgroundImage: {
        'grid-marina':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 30h60M30 0v60' stroke='%232E6DA4' stroke-opacity='.07' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .6s cubic-bezier(.22,1,.36,1) both',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
