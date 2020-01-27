var path = require("path");
var webpack = require("webpack");

module.exports = {

    context: __dirname,
    entry:  './src/index.js',
    output: {
        path: path.resolve('./bundles/'),
        filename: '[name].js',
    },
    
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.css$/,
                'loader': 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:64:5]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['stage-2','react']//stage 2 for class level attrs and autobind
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    resolve: {
        extensions: [ '.js', '.jsx']
    },
}