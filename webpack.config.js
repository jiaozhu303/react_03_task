var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
// var openBrowserPlugin = require('open-browser-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var libraryName = "task03";
var port = 7070;


var args = require('yargs').argv;
console.log(args);

var webpackPlugins = [
    new htmlWebpackPlugin({
        title: 'react 学习 03',
        template: path.resolve(__dirname, "./src/index.html")
    }),
    // new openBrowserPlugin({
    //     url: 'http://localhost:'+ port
    // }),
    new webpack.BannerPlugin('作者：zhaodj\n日期：'+ new Date().toLocaleString()),
    new extractTextWebpackPlugin("styles.css")
];

if (args.env === 'prod') {
    //压缩JS
    webpackPlugins.push(new uglifyJsPlugin({minimize: true, sourceMap: true, warnings: true}));
    //sparrow.min.js
    libraryName = libraryName + ".min"
}

var config = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: libraryName + ".js",
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'cheap-source-map',
    resolve: {
        extensions: ['.js', '.css', '.json', '.less']
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            use: 'eslint-loader',
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            use: extractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            }),
            exclude: /node_modules/
        }],
    },
    devServer: {
        contentBase: 'dist',
        inline: true,
        port: port,
        stats: {
            colors: true
        }
    },
    plugins: webpackPlugins
};

module.exports = config;
