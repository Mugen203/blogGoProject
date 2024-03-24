/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'internal/templates/**/*.templ',
  ],
  daisyui: {
    themes: ["light", "dark", "luxury", "coffee", "forest", "business"],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
