/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '180px',
        'xs': '357px',
        'sm': '540px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widesty: '.25em',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        anton: ['Anton SC', 'sans-serif','sans'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
