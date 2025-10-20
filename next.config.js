/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Bỏ qua tất cả lỗi ESLint khi build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig