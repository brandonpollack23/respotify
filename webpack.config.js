var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        javascript: "./src/index.js",
        html: "./src/index.html",
    },
    output: {
        path: './dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("style.css", { allChunks: true })
    ]
}
