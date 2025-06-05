/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sunlight: {
          orange: "#F15A22",
          darkOrange: "#D0491E",
          navy: "#2B3A67",
          lightOrange: "#FCEFE7",
          text: "#111827",
          textMuted: "#6B7280",
        },
      },
    },
  }, // ← this closing brace was missing
  plugins: [],
};
