module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-admin/' : '/',
  devServer: {
    disableHostCheck: true
  }
};
