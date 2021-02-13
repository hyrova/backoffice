import Head from "next/head";
import Link from "next/link";

const DefaultLayout = (props) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <div className="topnav" id="myTopnav">
        <Link href="/">Home</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
      <div>{props.children}</div>
    </div>
  </>
);

export default DefaultLayout;
