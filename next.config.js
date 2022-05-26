const withVideos = require('next-videos');
const nextConfig = withVideos({
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
});

module.exports = nextConfig;
