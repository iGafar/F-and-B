/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      big: "1150px",
      md: "810px",
      tb: "650px",
      mb: "300px",
    },
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        main: "#ffffff",
        primary_gray: "#899d9d",
        primary_green: "#bae249",
        green_focus: "#83a440",
        green_hover: "#91AC46",
        green_active: "#688B05",
        green_text: "#506829",
        background: "#1d2f30",
        background_shade: "#0b1919",
      },
      backgroundImage: {
        main_back:
          "linear-gradient(rgba(29, 47, 48, .7), rgba(29, 47, 48, .7)), url(./src/assets/images/main_back.jpg)",
        help_back:
          "linear-gradient(rgba(29, 47, 48, .7), rgba(29, 47, 48, .7)), url(./src/assets/images/help_back.jpg)",
      },
    },
  },
  plugins: [
		require('tailwind-scrollbar'),
	],
};
