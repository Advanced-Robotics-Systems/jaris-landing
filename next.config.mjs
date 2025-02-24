/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cpanel",
        destination: "http://admin.jawahirschool.com:2083",
        permanent: true,
      },
      {
        source: "/whm",
        destination: "http://admin.jawahirschool.com:2086",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
