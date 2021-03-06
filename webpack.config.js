const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "app.bundle.js"
  },
  devServer: {
    contentBase: "/build",
    inline: true
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/, 
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract("css-loader!sass-loader")
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: "babel-loader"
      },
      {
        test: /\.pug$/,
        loaders: ["file-loader?name=[name].html", "pug-html-loader?exports=false"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader?name=[name].[ext]", "image-webpack-loader?bypassOnDebug"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.bundle.css")
  ] 
};