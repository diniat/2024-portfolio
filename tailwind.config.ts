import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        peach: "#FFE6BC",
        isabelline: "#F7F1EA",
        "light-yellow": "#FEFBDA",
        dust: "#EDD1A1",
      },
      boxShadow: {
        card: "inset 300px 0 50px rgba(0,0,0,.5), 20px 0 60px rgba(0,0,0,.5)",
        "card-hov": "300px 200px 100px rgba(0, 0, 0, .4) inset",
      },
    },
  },
  plugins: [],
};
export default config;
