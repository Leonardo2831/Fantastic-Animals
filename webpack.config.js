const path = require("path");

module.exports = {
    entry: './Assets/Javascript/script.js',
    output: {
        path: path.resolve(__dirname, './Assets/Javascript'),
        filename: 'main.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
        ],
    },
};