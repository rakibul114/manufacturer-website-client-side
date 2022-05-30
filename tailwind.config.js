module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2A5135",

          secondary: "#E8D4C1",

          accent: "#FCB34C",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#FAF5F1",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui", "tw-elements/dist/plugin")],
};




