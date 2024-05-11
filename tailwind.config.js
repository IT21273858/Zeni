/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        'logo': ['Nino', "sans-serif"],
        'Gro': ['Schibsted Grotesk', 'sans-serif'],
        'TT1': ['TT Drugs Trial', "sans-serif"],
        'TT2': ['TT Drugs Trl Cnd'," sans-serif"],
        'Vign': [ 'Vignettes', "sans-serif"],
        'pop': ["Poppins", "sans-serif"],
                                                  
  
      },
      screens: {
        'mobile': '320px',
        'xsm': '450px',
        'sm': '640px',
        'md': '768px',
        'mmd': '920px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

