const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    isDevelopment = process.env.NODE_ENV !== 'production',
    conf = {
        entry: {
            bundle: './src/index.js',
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'main.js',
        },
        devtool: isDevelopment && "source-map",
        devServer: {
            overlay: true, //show errors,
            open: true,
            contentBase: path.join(__dirname, "dist"),
        },
        module: {
            rules: [
                { 
                    test: /\.handlebars$/, 
                    loader: "handlebars-loader" 
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ['@babel/preset-env']
                    }
                }
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                })],
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            outputPath: 'fonts/',
                            mimetype: 'application/font-woff',
                            publicPath: 'fonts/'
                        }
                    }]
                }
            ]
        },
        watch:true,
        resolve: { extensions: [".js", ".ts"] },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    handlebarsLoader: {}
                }
            }), 
            new MiniCssExtractPlugin({
                filename: "[name]-styles.css",
                chunkFilename: "[id].css"
            }),
            new HtmlWebpackPlugin({
                title: 'IdeaSoft Test1',
                template: './src/index.handlebars',
            }),
        ],
        devtool: 'eval-sourcemap'
    };
module.exports = (env, options) => {
    const production = options.mode === 'production';
    conf.devtool = production ? 'source-map': 'eval-sourcemap';
    return conf;
} 