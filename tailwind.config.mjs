/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				current: "currentColor",
				redRR: "#FF4655",
				primary:{
					grey: "rgb(var(--color-primary-grey)) / <alpha-value>",
					
				},
				text: {
					body: "rgb(var(--color-text-body)) / <alpha-value>",
					bold: "rgb(var(--color-text-bold)) / <alpha-value>",
				},
				bg: {
					body: "rgb(var(--color-bg-body)) / <alpha-value>",
					
				},
				border: {
					body: "rgb(var(--color-border-body)) / <alpha-value>",
				},
			}
		},
	},
	plugins: [],
}
