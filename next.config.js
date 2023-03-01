/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgProps: { fill: 'currentColor' }, icon: true }
        }
      ]
    })

    return config
  },
  images: {
    domains: ['api-dev.plazaticket.com']
  }
}

module.exports = nextConfig
