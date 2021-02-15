// const { resolve } = require('path')
// const webpack = require('webpack')

// module.exports = {
//   webpack: (config, { defaultLoaders }) => {
//     config.resolve.alias['@'] = resolve(__dirname, 'common')

//     // SVG parsing for SASS
//     config.module.rules.push({
//       test: /\.svg$/,
//       loader: 'url-loader',
//       issuer: {
//         test: /\.s[ac]ss$/i,
//       },
//     })

//     // SVG as React Components
//     config.module.rules.push({
//       test: /\.svg$/,
//       loader: '@svgr/webpack',
//       issuer: {
//         test: /\.tsx?$/
//       },
//       options: {
//         dimensions: false,
//         svgoConfig: {
//           removeViewBox: false
//         }
//       }
//     })

//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         'fetch': 'isomorphic-unfetch'
//       })
//     )

//     return config
//   },
// }