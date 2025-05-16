const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "./src/main.js"),
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ]
    },

    output: {
        filename: "script.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
}