/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
	  colors: {
		theme: "#f76b6a",
		primary: "#f3f3f3",
		primaryLight: "#e1e1e1",
		primaryDarker: "#ababab",
		primaryAccent: "#696969",
		secondary: "white",
		accent: "#333",
		// accent: "var(--color-accent)",
	  },
    },
  },
  plugins: [],
}
