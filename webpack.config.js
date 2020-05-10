const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const path = require("path");

module.exports = env => {
  const mode = env.mode ? env.mode : "production";

  return {
    mode,
    entry: {
      main: "./src/index.js"
    },
    output: {
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: {collapseWhitespace: true, removeComments: true},
        inject: false
      }),
      new CopyPlugin([
          {
            from: 'public/images',
            to: 'images/',
          },
          {
            from: 'public/manifest.json',
            to: 'manifest.json',
          },
          {
            from: 'public/robots.txt',
            to: 'robots.txt',
          },
        ],
      ),
      // new WorkboxPlugin.GenerateSW({
      //   // these options encourage the ServiceWorkers to get in there fast
      //   // and not allow any straggling "old" SWs to hang around
      //   clientsClaim: false,
      //   skipWaiting: false,
      //   runtimeCaching: [{
      //     urlPattern: new RegExp('https://api.exchangeratesapi.io/latest'),
      //     handler: 'NetworkFirst'
      //   }]
      // }),
      new WorkboxPlugin.InjectManifest({
        swSrc: './src/service-worker.js'
      }),
    ],
    devtool: "source-map"
  };
};
