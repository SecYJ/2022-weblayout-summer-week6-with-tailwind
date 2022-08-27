module.exports = {
    content: ["./app/**/*.{html,ejs}"],
    theme: {
        extend: {
            colors: {
                gray: {
                    light: "#C1C1C1",
                    dark: "#909090",
                },
                dark: {
                    100: "#2D2D2D",
                    200: "#202020",
                    300: "#1C1C1C",
                    400: "#1A1A1A",
                },
                primary: "#62DB54",
                accent: "#09ACF5",
            },
            spacing: {
                testing: "1rem",
            },
            listStyleType: {
                square: "square",
            },
        },
        container: {
            center: true,
            padding: ".75rem",
        },
    },
    plugins: [
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
    ],
};
