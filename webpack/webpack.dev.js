/*
 * @Author: mhc 
 * @Date: 2018-10-08 20:28:50 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-08 22:03:37
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
        historyApiFallback: true,
        hot: true,
        port: 9000,
        // 压缩
        // compress: true,
        // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认禁用。如果你想要只显示编译器错误：
        overlay: {
            // warnings: true,
            errors: true
        }
    },
    // optimization: {
    //     nodeEnv: 'development'
    // },
    // 对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用。这个选项可以排除一些巨大的文件夹
    watchOptions: {
        ignored: /node_modules/
    },
    // 给定一个创建后超过 250kb 的资源 false | "error" | "warning"
    performance: {
        hints: 'warning'
    },
    plugins: [
        // mode 为production 时可以省略NamedModulesPlugin
        //  development
        // 会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
        // production
        // 会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
})