module.exports = function override(config, env) {
  // Suppress source map warnings for specific modules
  config.module.rules.push({
    test: /\.m?js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: [
      /@mediapipe/,
      /node_modules/
    ]
  });

  // Ignore source map warnings
  config.ignoreWarnings = [
    {
      module: /@mediapipe/
    },
    function (warning) {
      return (
        warning.message &&
        warning.message.includes('source-map-loader') &&
        warning.message.includes('Failed to parse source map')
      );
    }
  ];

  return config;
};
