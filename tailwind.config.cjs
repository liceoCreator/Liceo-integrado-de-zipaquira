/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {},
		extend: {
			gridTemplateColumns: {
				'fit': 'repeat(auto-fit, minmax(335px, 1fr))',
				'fit2': 'repeat(auto-fit, minmax(548px, 1fr))'
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
