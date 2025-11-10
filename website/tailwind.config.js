/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          darker: '#2a2a2a',
          red: '#ff3366',
          blue: '#00d4ff',
          green: '#39ff14',
          purple: '#b967ff',
          gold: '#d4af37',
          text: '#e0e0e0',
          'text-dim': '#b0b0b0',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glow: {
          'from': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor',
          },
          'to': {
            textShadow: '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
            boxShadow: '0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
