// webpack.config.js
var webpack = require('webpack');
const glob  = require('glob'); // 使用glob动态添加 entry，让配置做到自动化

var config = {
    entry: {
        vendor: [

        ]
    },
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: ['es2015', 'stage-0', 'react']}
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename: 'vendor.bundle.js'
        })
    ]
};

/**
 * find entries
 */
var files      = glob.sync('./src/js/*/index.js');
var newEntries = files.reduce(function(memo, file) {
    var name = /.*\/(.*?)\/index\.js/.exec(file)[1];
    memo[name] = entry(name);
    return memo;
},{});

config.entry = Object.assign({}, config.entry, newEntries);

/**
 * [entry description]
 * @param {[type] name [description]}
 * @return {[type] [description]}
 */
function entry(name) {
    return './src/js/' + name + '/index.js';
}

module.exports = config;