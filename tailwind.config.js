/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF2',
          100: '#CCD7E5',
          200: '#99AFC9',
          300: '#6687AE',
          400: '#335F93',
          500: '#1B365D', // Deep navy blue
          600: '#162C4A',
          700: '#112238',
          800: '#0B1725',
          900: '#060B13',
        },
        secondary: {
          50: '#FEF4E6',
          100: '#FDE9CC',
          200: '#FBD399',
          300: '#F9BD66',
          400: '#F7A733',
          500: '#F7941D', // Bright orange
          600: '#C67617',
          700: '#945911',
          800: '#633C0B',
          900: '#311E06',
        },
        gray: {
          50: '#F9F9F9',
          100: '#F5F5F5', // Light gray
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#333333', // Dark gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 18px -3px rgba(0, 0, 0, 0.15), 0 6px 9px -2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};