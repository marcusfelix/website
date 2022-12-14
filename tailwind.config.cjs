/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: "'DM Sans', sans-serif"
			},
			typography: (theme) => ({
				css: {
					color: 'white',
				},
			  }),
		
		},
	},
	plugins: [
		require('@tailwindcss/typography') 
	],
}
