const WebpackAssetsManifest = require('webpack-assets-manifest');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
module.exports = {
  optimization: {
    runtimeChunk: false
  },
  output: {
    publicPath: '/',
  },
  module: {
    // noParse 用來標識這個 module, 不進行轉化和解析, 讓 Webpack 直接引入使用
    noParse: /jquery|lodash/,
  },
  // externals: {
  //   lodash: '_',
  //   rxjs: 'rxjs', 'rxjs/operators': 'rxjs.operators',
  // },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '/',
    }),
    // new WebpackAssetsManifest(),
    // new WebpackAssetsManifest({
    //   output: 'manifest.json',
    // }),
  ]
};
