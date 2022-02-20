// module.exports = function (api) {
//   api.cache.forever()
//     return {
//       plugins: ['macros'],
//     }
//   }
  

// module.exports = function(api) {
//   api.cache(true)
//   return {
//     plugins: [
//       "@babel/plugin-transform-flow-strip-types",
//       "@babel/plugin-transform-modules-commonjs",
//       "@babel/plugin-transform-async-to-generator",
//       "@babel/plugin-transform-strict-mode",
//       "@babel/plugin-transform-runtime"
//     ]
//   }
// }

module.exports = function (api) {
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-flow'
  ];
  const plugins = [

    'lodash',
    ['@babel/plugin-transform-spread', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-runtime'
  ];

  /** this is just for minimal working purposes,
     * for testing larger applications it is
     * advisable to cache the transpiled modules in
     * node_modules/.bin/.cache/@babel/register* */
  api.cache(true);

  return {
    presets,
    plugins
  };
};

// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };