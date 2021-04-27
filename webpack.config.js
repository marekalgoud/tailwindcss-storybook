const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'msl',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {

                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {

                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets/fonts/',
                      publicPath: 'assets/fonts'
                    }
                  }
                ]
            },
        ]
    }, 
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}