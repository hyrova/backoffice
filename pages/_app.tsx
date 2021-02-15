import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import Nav from "../src/components/Nav";
import { AppWrapper } from "../src/context/state";
import LayoutWrapper from "../src/layouts/layout-wrapper";
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
        <LayoutWrapper {...pageProps}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
