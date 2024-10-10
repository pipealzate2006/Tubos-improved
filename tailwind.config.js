/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), flowbite.plugin()],
};
