import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import { AppWrapper } from "../src/context/state";
import LogicWrapper from "../src/LogicWrapper";
import { darkTheme } from "../src/theme/theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
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
      <AppWrapper>
        <LogicWrapper {...pageProps}>
          <Component {...pageProps} />
        </LogicWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
