/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
