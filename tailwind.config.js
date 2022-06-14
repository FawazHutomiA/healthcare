module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6941C6",
            }
        },
        screens: {
            'lg': '1024px',
        }
    },
    plugins: [],
}