/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Customize red if needed to match the image exactly, typically a bit brighter
                red: {
                    500: '#EF4444',
                    600: '#DC2626',
                }
            }
        },
    },
    plugins: [],
}
