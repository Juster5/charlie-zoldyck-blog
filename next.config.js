const path = require('path')
const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = {

  // sentry配置
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
  },

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

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
  include: ['.next/server/pages'],
  // urlPrefix: '~/_next'        // 最关键的，相对路径
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)