module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainBackground: {
          DEFAULT: "#F5F5F8",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F5F5F8",
          600: "#D7D7E3",
          700: "#B9B9CE",
          800: "#9B9BB9",
          900: "#7D7DA4",
        },
        activeComponent: {
          DEFAULT: "#FA4A0C",
          50: "#FFF1ED",
          100: "#FEDFD4",
          200: "#FDBAA2",
          300: "#FC9470",
          400: "#FB6F3E",
          500: "#FA4A0C",
          600: "#CF3904",
          700: "#9D2B03",
          800: "#6B1D02",
          900: "#391001",
        },
        diactiveComponent: {
          DEFAULT: "#ADADAF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FAFAFB",
          300: "#E1E1E1",
          400: "#C7C7C8",
          500: "#ADADAF",
          600: "#939396",
          700: "#79797D",
          800: "#606063",
          900: "#474749",
        },
      },
      fontSize: {
        icons: ".438rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
