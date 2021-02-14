import Head from "next/head";

const GuestLayout = (props) => (
  <>
    <Head>
      <title>Hyrova admin - Guest</title>
      <meta charSet="utf-8" />
    </Head>
    <main>{props.children}</main>
  </>
);

export default GuestLayout;
