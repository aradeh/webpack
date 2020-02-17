const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry:"./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname,"dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    }
    )],
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: [
                    "style-loader",//3. injects js into DOM
                    "css-loader", //2. converts css to js 
                    "sass-loader" //1. loads sass through node-sass bootstrap converts to css
                ]

            }
        ]
    }
};