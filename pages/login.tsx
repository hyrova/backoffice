import Head from "next/head";
import React from "react";
import LoginForm from "../src/components/features/Authentication/templates/LoginForm";
import MobileFullHeightCard from "../src/components/common/Card/MobileFullHeightCard";

function Login() {
  return (
    <>
      <Head>
        <title>Hyrova admin - login</title>
      </Head>
      <MobileFullHeightCard>
        <LoginForm />
      </MobileFullHeightCard>
    </>
  );
}

Login.layout = "guest";
Login.auth = false;

export default Login;
