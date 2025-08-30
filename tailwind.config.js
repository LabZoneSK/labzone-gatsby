/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/templates/**/*.{js,jsx,ts,tsx}',
        './src/common/**/*.{js,jsx,ts,tsx}',
    ],
    important: true, // This makes all Tailwind classes important
    theme: {
        extend: {
            colors: {
                'labzone-red': '#e30613',
                dark: '#111517',
            },
            fontFamily: {
                nunito: ['Nunito Sans', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
