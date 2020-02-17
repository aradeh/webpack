const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:"./src/index.js",
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

            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
};