// eslint-disable-next-line no-unused-vars
module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.css' ? 'sugarss' : false,
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {},
  },
});
