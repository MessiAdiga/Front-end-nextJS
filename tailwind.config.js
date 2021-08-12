module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        customBrand: "'Style Script', cursive",
        customFooter: "'Lato', sans-serif",
        navLinks: "'Architects Daughter', cursive",
        customTitle: "'Hahmlet', serif",
      },
      backgroundImage: (theme) => ({
        "layout-pattern":
          "url('https://thumbs.dreamstime.com/b/gray-fabric-texture-cloth-background-163448594.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
