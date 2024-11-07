const path = require('path')
const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
    const options = {
        webpackOptions: {
            resolve: {
                alias: {
                    '@components': path.resolve(
                        __dirname,
                        '../../../FrontEnd-ENE/client/src/components'
                    ),
                },
                extensions: ['.js', '.jsx'],
            },
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react',
                                ],
                            },
                        },
                    },
                ],
            },
        },
    }

    on('file:preprocessor', webpack(options))

    return config
}
