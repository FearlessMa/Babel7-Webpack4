/*
 * @Author: mhc 
 * @Date: 2018-10-08 21:03:20 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-08 21:32:22
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');


module.exports = merge(common,{
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname,'../'),//根目录
            verbose: true,
            dry: false
        }),
    ]
    // optimization: {
    //     nodeEnv: 'production'
    // },
})