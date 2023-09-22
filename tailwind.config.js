/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '600px',
				md: '728px',
				lg: '728px',
				xl: '728px',
				'2xl': '728px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Iosevka Sans'],
			},
		},
	},
	plugins: [],
};
