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
  // module:{
  //   rules:{
  //       test: /\.svg$/i,
  //       issuer: /\.[jt]sx?$/,
  //       use: ['@svgr/webpack'],
  //   }
  // },
}

module.exports = nextConfig;

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//        // for webpack 5 use
//        // { and: [/\.(js|ts)x?$/] }
//       },
      
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };
