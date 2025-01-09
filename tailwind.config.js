/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["clamp", "width-clamp", {
       pattern: /^swiper-/
  }],

  theme: {
    extend: {
        fontFamily: {
            "nunito": ["Nunito", "serif"], 
            "PlayFair": ["Playfair Display", "serif"]
        }
    },
  },
  plugins: [],
}

