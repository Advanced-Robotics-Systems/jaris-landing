/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cpanel",
        destination: "https://p3plzcpnl506288.prod.phx3.secureserver.net:2083",
        permanent: true,
      },
      {
        source: "/whm",
        destination: "https://p3plzcpnl506288.prod.phx3.secureserver.net:2087",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
