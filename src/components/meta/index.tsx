import Head from "next/head";
import {
  HOME_OG_IMAGE_URL,
  SITE_AUTHOR_TWITTER_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@lib/constants";
import React from "react";
import { basePath, googleAnalyticsCode, domain } from "../../../envs";

export const Meta: React.FC = () => {
  const prismThemes = [
    "",
    "coy",
    "dark",
    "funky",
    "okaidia",
    "solarizedlight",
    "tomorrow",
    "twilight",
  ];

  const theme = prismThemes[5];

  return (
    <Head>
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href={`${basePath}/assets/favicon/apple-touch-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href={`
          "${basePath}/assets/favicon/apple-touch-icon-114x114.png"
        `}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href={`${basePath}/assets/favicon/apple-touch-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href={`
          "${basePath}/assets/favicon/apple-touch-icon-144x144.png"
        `}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href={`${basePath}/assets/favicon/apple-touch-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href={`
          "${basePath}/assets/favicon/apple-touch-icon-120x120.png"
        `}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href={`${basePath}/assets/favicon/apple-touch-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href={`
          "${basePath}/assets/favicon/apple-touch-icon-152x152.png"
        `}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${basePath}/assets/favicon/favicon-196x196.png`}
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${basePath}/assets/favicon/favicon-96x96.png`}
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${basePath}/assets/favicon/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${basePath}/assets/favicon/favicon-16x16.png`}
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${basePath}/assets/favicon/favicon-128.png`}
        sizes="128x128"
      />
      <meta name="application-name" content="Git masters" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta
        name="msapplication-TileImage"
        content={`${basePath}/assets/favicon/mstile-144x144.png`}
      />
      <meta
        name="msapplication-square70x70logo"
        content={`${basePath}/assets/favicon/mstile-70x70.png`}
      />
      <meta
        name="msapplication-square150x150logo"
        content={`${basePath}/assets/favicon/mstile-150x150.png`}
      />
      <meta
        name="msapplication-wide310x150logo"
        content={`${basePath}/assets/favicon/mstile-310x150.png`}
      />
      <meta
        name="msapplication-square310x310logo"
        content={`${basePath}/assets/favicon/mstile-310x310.png`}
      />
      {prismThemes.map((theme) => (
        <link
          key={theme}
          rel="preload"
          href={`https://unpkg.com/prismjs@1.15.0/themes/prism-${theme}.css`}
          as="script"
        />
      ))}
      <link
        href={`https://unpkg.com/prismjs@1.15.0/themes/prism-${theme}.css`}
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        href={`${basePath}/assets/favicon/favicon.ico`}
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        content="#0000"
        media="(prefers-color-scheme: light)"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="twitter:card" content={SITE_DESCRIPTION} />
      <meta name="twitter:url" content={domain} />
      <meta name="twitter:title" content={SITE_NAME} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
      <meta
        name="twitter:image"
        content={`${domain}${basePath}/assets/favicon/favicon-196x196.png`}
      />
      <meta name="twitter:creator" content={`@${SITE_AUTHOR_TWITTER_ID}`} />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsCode}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsCode}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};
