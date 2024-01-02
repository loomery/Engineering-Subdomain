/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					light: '#FFFFFF',
					dark: '#42B49F',
				},
				bg: {
					light: '#FFFFFF',
					dark: '#141414',
				},
			},
		},
	},
	plugins: [],
}
