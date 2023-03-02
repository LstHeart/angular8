const WebpackAssetsManifest = require('webpack-assets-manifest');
module.exports = {
  optimization: {
    runtimeChunk: false
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
    new WebpackAssetsManifest(),
    // new WebpackAssetsManifest({
    //   output: 'manifest.json',
    // }),
  ]
};
