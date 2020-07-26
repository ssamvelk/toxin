module.exports = {
  plugins: [
    require('autoprefixer'),
    // require('css-mqpacker'),    // сжимает все медиазапросы в 1файл
    require('cssnano')({ // минифицирует код
      preset: [
        'default', {
          discardComments: {
            removeAll: true, // удаляет все комменты
          },
        },
      ],
    }),
  ],
};
