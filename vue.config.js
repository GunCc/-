module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/',
    devServer: {
        proxy: 'http://10.1.53.138:10001/'
    }
}