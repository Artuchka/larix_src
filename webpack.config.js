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
		catalog: "./src/scripts/catalog.js",
		productCard: "./src/scripts/productCard.js",
		about: "./src/scripts/about.js",
		libs: "./src/scripts/libs.js",
	},
	plugins: [
		new cssPlugin(),
		new htmlPlugin({
			template: "./src/pages/index.pug",
			filename: "index.html",
			chunks: ["index", "libs"],
		}),
		new htmlPlugin({
			template: "./src/pages/catalog.pug",
			filename: "catalog.html",
			chunks: ["catalog", "libs"],
		}),
		new htmlPlugin({
			template: "./src/pages/productCard.pug",
			filename: "productCard.html",
			chunks: ["productCard", "libs"],
		}),
		new htmlPlugin({
			template: "./src/pages/about.pug",
			filename: "about.html",
			chunks: ["about", "libs"],
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
