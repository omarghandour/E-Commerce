/** @type {import('next').NextConfig} */
// const nextConfig = {
  
// }

// export default nextConfig
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
})