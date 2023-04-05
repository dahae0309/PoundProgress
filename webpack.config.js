const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html",
});
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	mode: process.env.NODE_ENV || "development",
	plugins: [htmlPlugin],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: { presets: ["@babel/env", "@babel/preset-react"] },
			},
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file-loader",
				options: { name: "/static/[name].[ext]" },
			},
		],
	},
	devServer: {
		static: {
			publicPath: path.resolve(__dirname, "/dist"),
		},
		port: 8080,
		proxy: {
			"/": "http://localhost:3000",
		},
		historyApiFallback: true,
	},
};



// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// module.exports = {

//   entry: './src/index.js', 
//   output: {
//     path: path.join(__dirname, '/dist'), 
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new HTMLWebpackPlugin({
//       template: './src/index.html',
//       file: "./index.html"
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ["@babel/env",'@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//             {
//         test: /.css$/,
//         exclude: /node_modules/,
//         use: ['style-loader', 'css-loader'],
//       }
//     ]
//   }
// };