/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#000000",
        secondary: "#000000",
        accent: "#000000",
        neutral: "#000000",
        "base-100": "#000000",
      },
    },
    "black",
    "light",
  ],
  plugins: [require("daisyui")],
}
