/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "saas-primary": "#605BFF",
        "saas-blue": "#5B93FF",
        "saas-blue-sky": "#26C0E2",
        "saas-yellow": "#FFC327",
        "saas-orange": "#FF8F6B",
        "saas-danger": "#E71D36",
        "saas-warning": "",
        "saas-info": "",
        "saas-dark": "",
      },
      fontFamily: {
        text: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
