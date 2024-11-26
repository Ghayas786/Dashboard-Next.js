// next.config.js

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '/photos/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  