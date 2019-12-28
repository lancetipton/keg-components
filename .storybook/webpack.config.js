const path = require('path')
const platform = process.env.PLATFORM || 'web'

module.exports = ({ config, mode }) => {

  config.resolve.extensions = [
    platform === 'native' && ".native.js" || ".web.js",
    ...config.resolve.extensions,
  ]

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  })

  config.resolve.alias = {
    ...config.resolve.alias,
    KegButton: path.resolve(__dirname, `../src/components/button/button.${platform}.js`),
    KegImg: path.resolve(__dirname, `../src/components/image/image.${platform}.js`),
    KegInput: path.resolve(__dirname, `../src/components/form/input/input.${platform}.js`),
    KegForm: path.resolve(__dirname, `../src/components/form/${platform}/index.js`),
    KegLink: path.resolve(__dirname, `../src/components/typeface/link.${platform}.js`),
    KegText: path.resolve(__dirname, `../src/components/typeface/kegtext.${platform}.js`),
    KegView: path.resolve(__dirname, `../src/components/view/view.${platform}.js`),
    "react-native": "react-native-web/dist/cjs"
  }

  return config
}