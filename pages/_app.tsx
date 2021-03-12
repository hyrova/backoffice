import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import { AppWrapper } from "../src/context/state";
import LogicWrapper from "../src/LogicWrapper";
import { darkTheme } from "../src/theme/theme";
import {
  CachePolicies,
  IncomingOptions,
  Provider as HttpProvider,
} from "use-http";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const globalOptions: IncomingOptions = {
    cachePolicy: CachePolicies.NO_CACHE,
    interceptors: {
      request: ({ options }) => {
        options.headers = {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
        };
        return options;
      },
    },
  };

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <HttpProvider options={globalOptions} url="http://localhost/api">
        <AppWrapper>
          <LogicWrapper {...pageProps}>
            <Component {...pageProps} />
          </LogicWrapper>
        </AppWrapper>
      </HttpProvider>
    </ThemeProvider>
  );
}

export default MyApp;
