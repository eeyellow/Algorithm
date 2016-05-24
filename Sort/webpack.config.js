var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname,
        filename: './dist/main.js'
    },
    module: {
        loaders: [
            { 
                test: path.join(__dirname, 'src'), 
                loader: 'babel-loader'
            }, 
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./dist/style.css", {
            allChunks: true
        })
    ]
};
