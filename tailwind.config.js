/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tight': '-0.02em',
      },
      // ✅ Add custom animation for gradient movement
      animation: {
        'gradient-y': 'gradientY 6s ease-in-out infinite',
      },
      keyframes: {
        gradientY: {
          '0%, 100%': {
            backgroundPosition: '50% 0%',
          },
          '50%': {
            backgroundPosition: '50% 100%',
          },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};
