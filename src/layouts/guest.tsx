import Head from "next/head";
import Container from "@material-ui/core/Container";

const GuestLayout = (props) => (
  <>
    <Head>
      <title>Hyrova admin - Guest</title>
      <meta charSet="utf-8" />
    </Head>
    <Container component="main" maxWidth="sm">
      {props.children}
    </Container>
  </>
);

export default GuestLayout;
