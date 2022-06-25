module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
        "xs-down": { max: "450px" },
        "sm-down": { max: "600px" },
        "md-down": { max: "960px" },
        "lg-down": { max: "1280px" },
        "xl-down": { max: "1920px" },
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        "2x": "calc(200%)",
        "3x": "calc(300%)",
        "4x": "calc(400%)",
        "5x": "calc(500%)",
        "6x": "calc(600%)",
        "7x": "calc(700%)",
      },
      backgroundImage: {
        logo: "url('/src/assets/images/logo/logo.svg')",
      },
      colors: {
        primary: "#10504F",
        secondary: "#003657",
        success: "#00AA06",
        warning: "#F1B800",
        error: "#FF0000",
      },
    },
  },
  plugins: [],
};
