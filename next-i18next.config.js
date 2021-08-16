const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");


module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    localePath: path.resolve("./public/locales"),
    localeSubpaths,
  },
};
