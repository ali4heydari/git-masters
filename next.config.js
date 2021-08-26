const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");

// If such a type existed...
/** @type { import("next").NextConfig } */
const nextConfig = {
  i18n,
};

module.exports = withPlugins([], nextConfig);
