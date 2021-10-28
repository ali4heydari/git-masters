const withPlugins = require("next-compose-plugins");
const { withSentryConfig } = require("@sentry/nextjs");
const { basePath, domain } = require("./envs");
// const { i18n } = require("./next-i18next.config");

const isProd = process.env.NODE_ENV === "production";

/** @type { import("@sentry/nextjs/src/config/types").ExportedNextConfig }*/
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// If such a type existed...
/** @type { import("next").NextConfig } */
const nextConfig = {
  // i18n,
  basePath,
  assetPrefix: isProd ? `${basePath}/` : "",
  images: {
    loader: "imgix",
    path: domain,
  },
};

module.exports = withPlugins(
  [
    [
      // Make sure adding Sentry options is the last code to run before exporting, to
      // ensure that your source maps include changes from all other Webpack plugins
      withSentryConfig,
      sentryWebpackPluginOptions,
    ],
  ],
  nextConfig
);
