import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "genesis-orange": "#FA6600",
      },

      fontFamily: {
        "poppins": "var(--font-poppins)",
        "poppinsBold" : "var(--font-poppinsBold)",
        "jost": "var(--font-jost)",
      },
      
      fontWeight: {
        "superbold": "font-weight: 2000"
      }, 

      objectPosition: {
        "center-down": "25% 97%"
      }
    },
  },
  plugins: [],
};
export default config;
