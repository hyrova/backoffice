import Head from "next/head";
import Link from "next/link";

const GuestLayout = (props) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div>{props.children}</div>
  </>
);

export default GuestLayout;
