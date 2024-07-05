/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					light: '#FFFFFF',
					dark: '#04564D',
				},
				bg: {
					light: '#383838',
					dark: '#141414',
				},
				accent: '#42B49F',
			},
		},
	},
	plugins: [],
}
