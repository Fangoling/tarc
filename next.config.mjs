/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',

            }
        ]
    },
    async redirects() {
    return [
      {
        source: '/:path*', // Match all paths
        has: [
          {
            type: 'host',
            value: 'tarc-fitness.de', // Match requests from tarc-fitness.de only
          },
        ],
        destination: 'https://tarc-fitness.com/de/:path*', // Redirect to tarc-fitness.com/de
        permanent: true, // Use a 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;