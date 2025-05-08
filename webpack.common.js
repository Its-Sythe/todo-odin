const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "script.js",
        clean: true,
    },

    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                use: 'html-loader'
            }
        ],
    }
}