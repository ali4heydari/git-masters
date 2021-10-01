module.exports = {
  basePath: "/git-masters",
  googleAnalyticsCode: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  hotjarId: Number(process.env.NEXT_PUBLIC_HOTJAR_ID || 0),
  hotjarSnippetVersion: Number(
    process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION || 0
  ),
  domain: process.env.NEXT_PUBLIC_DOMAIN || "https://ali4heydari.tech",
};
