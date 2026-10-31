/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#101522',
          deep: '#0A0D16',
          surface: '#151C2C',
        },
        obsidian: {
          DEFAULT: '#252C43',
          light: '#313A56',
          border: '#3F4A6E',
          shadow: '#0D111A',
        },
        lilac: {
          DEFAULT: '#A78BFA',
          light: '#C4B5FD',
          glow: 'rgba(167, 139, 250, 0.45)',
          dark: '#7C3AED',
        },
        soul: {
          DEFAULT: '#67E8D0',
          glow: 'rgba(103, 232, 208, 0.45)',
          dark: '#14B8A6',
          deep: '#0F766E',
        },
        sand: {
          DEFAULT: '#E7D7B2',
          light: '#F5EBD4',
          dark: '#C4B188',
          border: '#8F7D57',
        },
        moonlight: {
          DEFAULT: '#F3F0FF',
          muted: '#CBD5E1',
          dim: '#94A3B8',
        },
        gold: {
          DEFAULT: '#D4A337',
          light: '#F5D061',
        }
      },
      fontFamily: {
        pixel: ['"Silkscreen"', '"Press Start 2P"', 'monospace'],
        sans: ['"Manrope"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pixel-sm': '2px 2px 0px #06080E',
        'pixel-md': '3px 3px 0px #06080E',
        'pixel-lg': '4px 4px 0px #06080E',
        'pixel-lilac': '3px 3px 0px #7C3AED, 0 0 15px rgba(167, 139, 250, 0.3)',
        'pixel-soul': '3px 3px 0px #0F766E, 0 0 15px rgba(103, 232, 208, 0.3)',
        'pixel-sand': '3px 3px 0px #8F7D57',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'beam-pulse': 'beamPulse 4s ease-in-out infinite',
        'pixel-blink': 'pixelBlink 1s step-start infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        beamPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scaleX(1)' },
          '50%': { opacity: '0.9', transform: 'scaleX(1.15)' },
        },
        pixelBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
