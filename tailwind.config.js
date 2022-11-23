/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3df7cf",
        
"secondary": "#317da5",
        
"accent": "#74ed17",
        
"neutral": "#1B232C",
        
"base-100": "#FAF8FB",
        
"info": "#5DCCEE",
        
"success": "#107566",
        
"warning": "#F2BB73",
        
"error": "#F47A71",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
