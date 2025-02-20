/** @type {import('next').NextConfig} */
const nextConfig = {
    "output": 'export', // Permite exportul static
    async rewrites() {
      return [
        {
          source: '/GAB/video_gabi.mp4',
          destination: '/GAB/video_gabi.mp4',
        },
      ];
    },
  
  };

module.exports = nextConfig;
  