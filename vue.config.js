module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                data: `@import "../assets/css/index.scss";`
            }
        }
    },
    productionSourceMap: false
}