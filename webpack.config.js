const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    autoprefixer = require('autoprefixer'),
    conf = {
        entry: {
        app: './src/index.js',
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'main.js',
            // publicPath: 'dist/'
            publicPath: 'dist/'

        },
        devServer: {
            overlay: true //show errors
        },
        module: {
            rules: [
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
                { test: /\.handlebars$/, loader: "handlebars-loader" },
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
                                autoprefixer: {
                                    browsers: ["last 2 versions"]
                                },
                                plugins: () => [
                                    autoprefixer
                                ]
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                            }
                        }
                    ]
                }
            ]
        },
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
                title: 'My awesome service',
                template: './src/index.handlebars'
            })
        ],
        // plugins: [
    
        //     new HandlebarsPlugin({
        //       entry: path.join(process.cwd(), "app", "src", "*.hbs"),
        //       output: path.join(process.cwd(), "build", "[name].html"),
        //      // data: require("./app/data/project.json"),
        //      // data: path.join(__dirname, "app/data/project.json"),
        //       partials: [
        //         path.join(process.cwd(), "app", "src", "components", "*", "*.hbs")
        //       ],
        
        //       // register custom helpers. May be either a function or a glob-pattern
        //       helpers: {
        //         nameOfHbsHelper: Function.prototype,
        //         projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
        //       },
        
        //       // hooks
        //       onBeforeSetup: function (Handlebars) {},
        //       onBeforeAddPartials: function (Handlebars, partialsMap) {},
        //       onBeforeCompile: function (Handlebars, templateContent) {},
        //       onBeforeRender: function (Handlebars, data) {},
        //       onBeforeSave: function (Handlebars, resultHtml, filename) {},
        //       onDone: function (Handlebars, filename) {}
        //     })
        // ],
        devtool: 'eval-sourcemap'
    };
module.exports = (env, options) => {
    const production = options.mode === 'production';
    conf.devtool = production ? 'source-map': 'eval-sourcemap';
    return conf;
} 