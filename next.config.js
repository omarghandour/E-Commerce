/** @type {import('next').NextConfig} */
// const nextConfig = {
  
// }

// export default nextConfig
const prod = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: prod ? false : true,
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