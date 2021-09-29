import { googleAnalyticsCode } from "../../envs";

// log the pageview with their URL
export const pageview = (url: string) => {
  window.gtag("config", googleAnalyticsCode, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
