// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // add other folders where you use MDX or HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
