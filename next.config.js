// module.exports = {
//     webpack: (config, { dev }) => {
//         config.module.rules.push(
//             {
//                 test: /\.css$/,
//                 loader: 'emit-file-loader',
//                 options: {
//                     name: 'dist/[path][name].[ext]',
//                 },
//             },
//             {
//                 test: /\.css$/,
//                 // Simplest example (non-minified)..
//                 loader: `babel-loader!next-style-loader`,
//                 // Example with `css-loader` to minify CSS
//                 // NOTE: The `url` option from the css loader must be disabled; images, fonts, etc should go into /static
//                 loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=`+!dev+`&url=false`,
//                 // Same as above but with CSS modules
//                 loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=`+!dev+`&url=false&modules`,
//                 // Example with `css-loader` and `postcss-loader' (you may also activate CSS modules just like above)
//                 // Enable `postcss-imports` plugin must be enabled in the `postcss.config.js` file to process @import declarations
//                 loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=`+!dev+`&url=false!postcss-loader`,
//                 // Example with `css-loader` and `sass-loader'
//                 loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=`+!dev+`&url=false!sass-loader`,
//             }
//         );
//
//         return config;
//     },
// };
// module.exports = {
//   webpack: (config, { dev }) => {
//     config.module.rules.push(
//       {
//         test: /\.(css|scss)/,
//         loader: "emit-file-loader",
//         options: {
//           name: 'dist/[path][name].[ext]'
//         }
//       }
//     ,
//       {
//         test: /\.css$/,
//         loader: "babel-loader!raw-loader"
//       }
//     ,
//       {
//         test: /\.scss$/,
//         loader: "babel-loader!raw-loader!sass-loader"
//       }
//     )
//     return config
//   }
// }
