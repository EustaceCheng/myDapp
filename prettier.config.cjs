/** @type {import("prettier").Config} */

const tailwindPlugin = require.resolve('prettier-plugin-tailwindcss');

module.exports = {
    trailingComma: 'all',
    singleQuote: true,
    tabWidth: 4,
    printWidth: 100,
    arrowParens: 'avoid',
    semi: true,
    plugins: [tailwindPlugin],
};
