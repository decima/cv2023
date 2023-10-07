/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                'mytheme': {
                    ...require("daisyui/src/theming/themes")["[data-theme=valentine]"],
                    'primary': '#7e1949',
                    'secondary': '#FF3399',
                    'base-100': '#fff',

                }
            }
        ]
    },
    plugins: [require("daisyui"),]
}