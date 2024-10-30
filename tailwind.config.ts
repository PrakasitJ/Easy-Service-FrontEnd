import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        urbanist: ["urbanist","sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
