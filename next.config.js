/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['countryflagsapi.com', 'openweathermap.org'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig;
