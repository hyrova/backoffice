import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import { AppWrapper } from "../src/context/state";
import LogicWrapper from "../src/LogicWrapper";
import { darkTheme } from "../src/theme/theme";
import { Provider as HttpProvider } from "use-http";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const globalOptions = {
    interceptors: {
      request: ({ options }) => {
        options.headers = {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json"
        };
        return options;
      },
      response: ({ response }) => {
        console.log("initial response.data", response.data);
        return response;
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
      <HttpProvider options={globalOptions}>
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
