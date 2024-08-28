/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
    theme: {
        container: {
            center: true,
        },
    },
    plugins: [require("flowbite/plugin")],
};
