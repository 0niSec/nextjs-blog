// Velite stuff
// https://github.com/zce/velite/blob/main/examples/nextjs/next.config.mjs
const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

const cspHeader = `
  default-src: 'self';
  script-src: 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.accounts.dev https://civil-longhorn-92.clerk.accounts.dev;
  connect-src: 'self' https://civil-longhorn-92.clerk.accounts.dev https://clerk.accounts.dev;
  img-src: 'self' https://img.clerk.com;
  worker-src: 'self' blob:;
  style-src: 'self' 'unsafe-inline';
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
