const path = require('path')

const nextConfig = {

  // 图片域名白名单
  images: {
    domains: ['static.okx.com'],
  },

  // webpack配置
  webpack (config) {
    // 移除css module
    config.module.rules.forEach(rule => {
      if (!rule.oneOf) return

      rule.oneOf.forEach(one => {
        if (!`${one.issuer?.and}`.includes('_app')) return
        one.issuer.and = [path.resolve(__dirname)]
      })
    })

    // todo: 添加sass全局变量
    // const regexEqual = (x, y) => {
    //   return x instanceof RegExp &&
    //   y instanceof RegExp &&
    //   x.source === y.source &&
    //   x.global === y.global &&
    //   x.ignoreCase === y.ignoreCase &&
    //   x.multiline === y.multiline; 
    // }

    
    // const sassRules = config.module.rules
    //   .find((rule) => typeof rule.oneOf === "object")
    //   .oneOf.find(
    //     (rule) =>
    //       rule.sideEffects === false &&
    //       regexEqual(rule.test, /\.module\.(scss|sass)$/)
    //   );

    // sassRules.use = sassRules.use.map((rule) =>
    //   rule.loader.includes("sass-loader")
    //     ? {
    //       ...rule,
    //       options: {
    //         ...rule.options,
    //         //引入你的全局样式
    //         additionalData: `@import '../styles/variables.scss';`,
    //       },
    //     }
    //     : rule
    //   );
   
    return config
  },
}

module.exports = nextConfig