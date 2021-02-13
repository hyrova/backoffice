import Head from "next/head";
import Link from "next/link";

const GuestLayout = (props) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <div className="topnav" id="myTopnav">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
      <div>{props.children}</div>
    </div>
  </>
);

export default GuestLayout;
