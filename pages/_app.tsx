import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "github-markdown-css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as ga from "../src/lib/ga";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
}

export default appWithTranslation(MyApp);
