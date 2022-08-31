const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Routes': path.resolve(__dirname, 'src/routes'),
      '@Services': path.resolve(__dirname, 'src/services'),
      '@Store': path.resolve(__dirname, 'src/store'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
    }
  },
};