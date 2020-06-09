const webpack = require('webpack')

const config = {
    entry: __dirname + 'js/index.jsx',
    outputL {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
};

module.exports = config;