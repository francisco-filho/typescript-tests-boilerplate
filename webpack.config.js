let path = require('path')

const config = {
    entry: {
        app: ['./main.ts']
    },
    output: {
        path: path.join(__dirname, './build/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { loader: 'ts-loader', test: /\.tsx?/}
        ]
    }
}

module.exports = config