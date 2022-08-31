const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Services': path.resolve(__dirname, 'src/services'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Views': path.resolve(__dirname, 'src/views'),
    }
  },
};