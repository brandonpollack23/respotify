module.exports = {
    entry: {
        javascript: "./src/index.js",
        html: "./src/index.html"
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
