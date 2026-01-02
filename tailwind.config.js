/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gulf Coast Modern Blue - Default Primary Color
        primary: {
          DEFAULT: '#4A90E2', // Bright Blue
          dark: '#3578C4',
          light: '#5FA3F0',
        },
        brand: {
          navy: '#475569',    // Muted navy (slate-600)
          sage: '#059669',    // Primary sage
          tan: '#D4A853',     // Warm tan
          cream: '#FAF9F6',   // Soft white
        },
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        // Theme Palette Definitions
        theme: {
          // Palette 1: Corporate Trust (GPT Recommended)
          'trust-navy': '#0A2A43',
          'trust-navy-dark': '#071D2F',
          'trust-navy-light': '#1A4B6B',
          'trust-blue': '#4A90E2',
          'trust-red': '#C62828',
          'trust-red-dark': '#A01E1E',
          'trust-red-light': '#D14949',
          'trust-gray': '#F5F7FA',
          'trust-text': '#4A4A4A',
          'trust-border': '#E1E5EA',
          
          // Palette 2: Gulf Coast Modern
          'gulf-navy': '#1E3A5F',
          'gulf-navy-dark': '#142840',
          'gulf-navy-light': '#2D5380',
          'gulf-blue': '#4A90E2',
          'gulf-blue-light': '#6BA8F0',
          'gulf-red': '#D32F2F',
          'gulf-red-dark': '#B02626',
          'gulf-red-light': '#E05656',
          'gulf-gray': '#F8F9FA',
          'gulf-text': '#3C4858',
          'gulf-border': '#DDE2E8',
          
          // Palette 3: American Classic
          'classic-navy': '#003B6F',
          'classic-navy-dark': '#002647',
          'classic-navy-light': '#005499',
          'classic-blue': '#0066CC',
          'classic-red': '#B71C1C',
          'classic-red-dark': '#8B1414',
          'classic-red-light': '#CF4444',
          'classic-cream': '#FAFAF9',
          'classic-text': '#2C2C2C',
          'classic-border': '#E8E8E6',
          
          // Palette 4: Coastal Premium
          'coastal-blue': '#2C5F8D',
          'coastal-blue-dark': '#1E4161',
          'coastal-blue-light': '#4080B8',
          'coastal-accent': '#546E7A',
          'coastal-red': '#C1272D',
          'coastal-red-dark': '#9A1F24',
          'coastal-red-light': '#D44B4F',
          'coastal-gray': '#F6F8FA',
          'coastal-text': '#37474F',
          'coastal-border': '#CFD8DC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        // Modern 2025-2026 typography scale
        'display': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '20': '5rem',     // 80px
        '22': '5.5rem',   // 88px
        '24': '6rem',     // 96px
        '28': '7rem',     // 112px
        '32': '8rem',     // 128px
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',  // 24px
          sm: '2rem',         // 32px
          lg: '3rem',         // 48px
          xl: '4rem',         // 64px
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',  // Max content width for modern 2025
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
