/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		accentColor: 'rgba(50, 255, 181, 1)',
		fontFamily: {
			mono: ['IBM Plex Mono', 'monospace'],
			sans: ['IBM Plex Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				brand: {
					light: 'rgba(255, 255, 255, 1)',
					dark: '#04564D',
				},
				bg: {
					light: 'rgba(78, 78, 78, 1)',
					dark: 'rgba(26, 26, 26, 1)',
				},
				accent: 'rgba(50, 255, 181, 1)',
			},
		},
	},
	plugins: [],
}
