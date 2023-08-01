const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html",
});
module.exports = {
	devtool: 'eval-cheap-module-source-map',
	entry: "./src/index.js",
  resolve: {
		extensions: ['.js', '.jsx'],
		enforceExtension: false,
  },
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
		sourceMapFilename: "[name].js.map"
	},
	mode: process.env.NODE_ENV || "development",
	// plugins: [htmlPlugin],
	plugins: [
    new HtmlWebPackPlugin({
      title: 'Development',
      template: './src/index.html'
		}),
		new webpack.ProgressPlugin(),
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: JSON.stringify(process.env.NODE_ENV)
		// 	}
		// }),
		// new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    new Dotenv(),
  ],
	module: {
		rules: [
			{
				// test: /\.(js|jsx)$/,
				test: /\.(js|jsx|png|jpg|svg|gif|ico)$/,
				exclude: /node_modules/,
				// loader: "babel-loader",
				// options: { presets: ["@babel/env", "@babel/preset-react", '@babel/preset-env' ] },
				use: {
        	loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
				// use:['source-map-loader']
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file-loader",
				options: { name: "/assets/[name].[ext]" },
			},
		],
	},
	devServer: {
		static: {
			// publicPath: path.resolve(__dirname, "/dist"),
			publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist'),
		},
		port: 8080,
		proxy:
			// "http://localhost:3000"
		{
			"/**": "http://localhost:3000/",
			"/login":"http://localhost:3000/",
		},
		// historyApiFallback: true,
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