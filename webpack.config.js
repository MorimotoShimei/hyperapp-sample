const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        path: path.resolve(__dirname, 'src', 'app.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader' }
        ]
    },
    resolve: {
        extensions: [
          '.ts'
        ]
    }
}
