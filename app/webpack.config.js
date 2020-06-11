const webpack = require('webpack')

const config = {
    entry: __dirname + '/static/js/index.js',
    output: {
        path: __dirname + '/static/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        rules: [{
                test: /\.js?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
                use: [
                    'file-loader?name=assets/images/[name].[ext]'
                ]
            }

        ]
    }
};

module.exports = config;
