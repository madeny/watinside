module.exports = {
  darkMode: 'class',
  content: ['./index.html', './theme-switch.js', './posts.json'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F9FAFB',
          dark: '#0B1D3B'
        },
        text: {
          light: '#0B1D3B',
          dark: '#F9FAFB'
        },
        accent: '#FFCC00',
        cardBg: {
          light: '#FFFFFF',
          dark: '#132B54'
        }
      }
    }
  },
  plugins: [],
};
