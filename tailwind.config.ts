/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-dark-1": "#1e293b",
        "color-dark-2": "#334155",
        "color-dark-3": "#475569",
        "color-green-1": "#16a34a",
        "color-green-2": "#22c55e",
        "color-green-3": "#4ade80",
        "color-white-1": "#f8fafc",
        "color-white-2": "#f1f5f9",
        "color-white-3": "#e2e8f0",
        "color-white-4": "#cbd5e1",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
      padding: ["last"],
      border: ["last"],
    },
  },
  plugins: [],
};
