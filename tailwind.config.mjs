/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sdd-bg': '#0D1117',
        'sdd-elevated': '#161B22',
        'sdd-text': '#E6EDF3',
        'sdd-muted': '#8B949E',
        'sdd-accent': '#39D353',
        'sdd-accent-alt': '#56D4DD',
        'sdd-warning': '#F0A020',
        'sdd-border': '#30363D',
      },
      fontFamily: {
        mono: ['JetBrains Mono Variable', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter Variable', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'terminal': '0 0 25px -5px rgba(57, 211, 83, 0.15)',
        'cyan-glow': '0 0 25px -5px rgba(86, 212, 221, 0.15)',
      }
    },
  },
  plugins: [],
};
