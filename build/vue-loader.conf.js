const { config } = require("webpack")

const isProduction = process.env.NODE_ENV === 'production'
// const sourceMapEnabled = isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap
