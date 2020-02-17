const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    module: {
        rules : [
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",//3. injects js into DOM
                        "css-loader", //2. converts css to js 
                        "sass-loader" //1. loads sass through node-sass bootstrap converts to css
                    ]
    
                }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    }
    )],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist")
    }
});