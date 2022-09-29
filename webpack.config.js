const htmlPlugin = require("html-webpack-plugin")
const cssPlugin = require("mini-css-extract-plugin")

let mode = "production"
if (process.env.NODE_ENV === "development") {
	mode = "development"
}

module.exports = {
	mode,
	devtool: "source-map",
	output: {
		clean: true,
		// assetModuleFilename: "assets/[name][ext][query]",
	},
	entry: {
		index: "./src/scripts/index.js",
		header: "./src/scripts/_header.js",
		accordion: "./src/scripts/_accordion.js",
	},
	plugins: [
		new cssPlugin(),
		new htmlPlugin({
			template: "./src/pages/index.pug",
			filename: "index.html",
			chunks: ["index"],
		}),
	],
	devServer: {
		static: "./src",
	},
	module: {
		rules: [
			{
				test: /\.(svg|png)$/i,
				type: "asset/resource",
				generator: {
					filename: "./img/[name].[hash][ext][query]",
				},
			},
			{
				test: /\.(scss|sass|css)$/i,
				use: [
					mode === "production" ? cssPlugin.loader : "style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(pug)$/i,
				use: ["pug-loader"],
			},
			{
				test: /\.(ttf)$/i,
				type: "asset/resource",
				generator: {
					filename: "./fonts/[name][ext][query]",
				},
			},
		],
	},
}
