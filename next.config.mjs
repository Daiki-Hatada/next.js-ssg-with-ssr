/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: '/SP/:path*',
        has: [
          {
            type: 'header',
            key: 'User-Agent',
            value: '.*(iPhone|Android|Mobile|Windows Phone|BlackBerry).*',
          },
        ],
      },
      {
        source: '/:path*',
        destination: '/PC/:path*',
        missing: [
          {
            type: 'header',
            key: 'User-Agent',
            value: '.*(iPhone|Android|Mobile|Windows Phone|BlackBerry).*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
