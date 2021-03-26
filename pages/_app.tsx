import { Collapse, CssBaseline, ThemeProvider } from "@material-ui/core";
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
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  const globalOptions: IncomingOptions = {
    cachePolicy: CachePolicies.NO_CACHE,
    interceptors: {
      request: ({ options }) => {
        options.headers = {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          withCredentials: "true"
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
      <HttpProvider
        options={globalOptions}
        url={process.env.NEXT_PUBLIC_API_HOST || "http://localhost/api"}
      >
        <AppWrapper>
          <SnackbarProvider
            maxSnack={3}
            TransitionComponent={Collapse}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <LogicWrapper {...pageProps}>
              <Component {...pageProps} />
            </LogicWrapper>
          </SnackbarProvider>
        </AppWrapper>
      </HttpProvider>
    </ThemeProvider>
  );
}

export default MyApp;
