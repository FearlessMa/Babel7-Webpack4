/*
 * @Author: mhc 
 * @Date: 2018-09-28 20:40:10 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-09 21:23:15
 */

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: 'js/[name]-[id].[hash:8].bundle.js',
        filename: 'js/[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // include
                exclude: '/node_modules',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            //由于使用@babel/core 对应以前的babel-preset-react babel-preset-env 需要替换为@babel/preset-env，@babel/preset-react
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            // 有.babel 文件就不需要是plugins
                            // plugins:['@babel/plugin-proposal-class-properties']
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                exclude: '/node_modules',
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src'),
            component: path.resolve(__dirname, '../src/component')
        },
        extensions: ['*', '.js', '.css', '.less', '.scss']
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'babel7',
            template:path.resolve(__dirname,'../index.html')
        })
    ]
}