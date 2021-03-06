import Head from "next/head";
import React from "react";
// import LoginForm from "../src/components/features/Authentication/templates/LoginForm";
// import MobileFullHeightCard from "../src/components/common/Card/MobileFullHeightCard";
import Pagination from "@material-ui/lab/Pagination";
import UserList from "../../src/components/features/Users/templates/UserList";
import WideMobileFullHeightCard from "../../src/components/common/Card/WideMobileFullHeightCard";

function UsersIndex() {
  return (
    <>
      <Head>
        <title>Hyrova admin - Users</title>
      </Head>
      <WideMobileFullHeightCard>
        <UserList />
      </WideMobileFullHeightCard>
    </>
  );
}

export default UsersIndex;
