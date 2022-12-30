const path = require('path')

const nextConfig = {
  // other settings...
  webpack (config) {
    // loop over all rules and find the ones with `oneOf` key
    // 移除css module
    config.module.rules.forEach(rule => {
      if (!rule.oneOf) return

      rule.oneOf.forEach(one => {
        if (!`${one.issuer?.and}`.includes('_app')) return
        one.issuer.and = [path.resolve(__dirname)]
      })
    })
    return config
  },
}

module.exports = nextConfig