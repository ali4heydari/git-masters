const withPlugins = require("next-compose-plugins");
const { basePath } = require("./envs");
const withPWA = require("next-pwa");

// const { i18n } = require("./next-i18next.config");

const isProd = process.env.NODE_ENV === "production";

// If such a type existed...
/** @type { import("next").NextConfig } */
const nextConfig = {
  // i18n,
  basePath,
  assetPrefix: isProd ? `${basePath}/` : "",
  images: {
    loader: "imgix",
    path: `https://ali4heydari.github.io`,
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
          disable: !isProd,
          scope: basePath,
        },
      },
    ],
  ],
  nextConfig
);
