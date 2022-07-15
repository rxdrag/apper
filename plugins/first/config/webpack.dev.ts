import baseConfig from './webpack.base'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
//import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import webpack from 'webpack'

const PORT = 4000

for (const key in baseConfig.entry) {
  if (Array.isArray(baseConfig.entry[key])) {
    baseConfig.entry[key].push(
      require.resolve('webpack/hot/dev-server'),
      `${require.resolve('webpack-dev-server/client')}?http://localhost:${PORT}`
    )
  }
}

export default {
  ...baseConfig,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    // ...createPages([
    //   {
    //     filename: 'index.html',
    //     template: path.resolve(__dirname, './template.ejs'),
    //     chunk: ['playground'],
    //   },
    // ]),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    host: '127.0.0.1',
    open: true,
    port: PORT,
  },
}
