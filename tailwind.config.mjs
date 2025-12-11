/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'ta-green': '#28A745',
                'ta-teal': '#17A2B8',
                'ta-primary': '#28A745',
                'ta-secondary': '#17A2B8',
            },
            fontFamily: {
                heading: ['Poppins', ...defaultTheme.fontFamily.sans],
                body: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};

export default config;