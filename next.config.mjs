/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cpanel",
        destination: "http://mail.jawahirschool.com:2083",
        permanent: true,
      },
      {
        source: "/whm",
        destination: "http://mail.jawahirschool.com:2087",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
