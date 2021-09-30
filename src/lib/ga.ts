import { googleAnalyticsCode } from "../../envs";

// log the pageview with their URL
export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag("config", googleAnalyticsCode, {
    page_path: url,
  });
};

// log specific events happening.
// @ts-ignore
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
