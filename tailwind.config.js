module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      prata: ["Prata", "serif"],
      petrona: ["Petrona", "serif"],
      noto: ["Noto Serif TC", "serif"],
      oran: ["Oranienbaum", "serif"],
      quest: ["Questrial", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      overlay: "rgba(0, 0, 0, 0.7)",
      gray: "#C4C4C4",
    }),
    extend: {
      backgroundImage: (theme) => ({
        home: "url('./assets/homepage.svg')",
        clearance: "url('./assets/clearance.svg')",
      }),
      height: {
        imagevh: "50vh",
        mdimagevh: "70vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
