module.exports = {
    plugins: {
      // to edit target browsers: use "browserslist" field in package.json
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 192,
        // unitPrecision: 5,
        propList: ['*'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 2,
      },
    },
  };
  