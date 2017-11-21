const  webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",  // 唯一入口文件
    output: {
        path: __dirname + "/build",  // 打包后文件存放的地方
        filename: "bundle-[hash].js" // 打包后输出文件的文件名
        // dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    },
    devtool: 'eval-soource-map',
    devServer: {
        contentBase: "./public", // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转到index.html
        inline: true, // 实时刷新
        hot: true
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // presets: [
                        //     "es2015", "react"
                        // ]
                    },
                },
                exclude: /node_modules/
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new  HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmp1.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
};