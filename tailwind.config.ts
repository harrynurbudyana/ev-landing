import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
       "olblue" : "#315f90",
        "torque" : "#328D8F",
        "tosca"  : "#328F62",
        "ored"   : "#952323",
        "lred"   : "#A73121",
        "whSky"  : "#EEF5FF",
        "whConfig" : "#F4F9FF"
      },
    },
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;
