/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['flagsapi.com', 'openweathermap.org', 'news.google.com', 'w7.pngwing.com'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig;
