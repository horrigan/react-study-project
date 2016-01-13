var webpack = require('webpack');
var path = require('path');
module.exports = {

    entry: {
        filename:  __dirname + "/app/components/main.js"

    },
    output: {
        path: __dirname + '/public/dist',
        "filename" : "bundle.js"
    },

    watchOption: {

        aggregateTimeout: 100

    },

    watch: false,

    devtool: 'source-map',

    /*plugins:  [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    ],*/

    module:{
        loaders:  [
            // the 'transform-runtime' plugin tells babel to require the runtime
            // instead of inlining it.
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ],
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: './public'
            }
        ]
    },

    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'React': 'React'
    },

    resolveLoader: {
        root: [
            path.join(__dirname, "node_modules")
        ]
    }
};

