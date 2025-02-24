/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cpanel",
        destination: "http://admin.jawahirschool.com:2083",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
