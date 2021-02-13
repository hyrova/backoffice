import { useEffect } from "react";
import LayoutWrapper from "../src/layouts/layout-wrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <LayoutWrapper {...pageProps}>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default MyApp;
