import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Reset from "@/styles/reset";

import themes from "@/styles/themes";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange());

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange());
    };
  }, [router.events]);
  return (
    <ThemeProvider theme={themes}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
