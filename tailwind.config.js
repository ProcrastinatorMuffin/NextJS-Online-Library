// Exporting the configuration object
module.exports = {
  // Specify the files to be scanned for Tailwind CSS classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable dark mode based on the class applied to the root element
  darkMode: "class",
  // Customize the default theme by extending or overriding the existing values
  theme: {
    extend: {},
  },
  // Add any additional plugins to enhance Tailwind CSS functionality
  plugins: [],
}