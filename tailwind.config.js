/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["clamp", "width-clamp", {
       pattern: /^swiper-/
  }, "custom-pagination"],

  theme: {
    extend: {
        fontFamily: {
            "nunito": ["Nunito", "serif"], 
            "PlayFair": ["Playfair Display", "serif"]
        },
        screens: {
              "max-xl": {
                   max: "1280px"
              },
              "max-2xl": {
                  max: "1580px"
              }
        }
        
    },
  },
  plugins: [],
}

