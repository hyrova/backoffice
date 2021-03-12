import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useFetch from "use-http";
import WideMobileFullHeightCard from "../../src/components/common/Card/WideMobileFullHeightCard";
import AppTextField from "../../src/components/common/Form/TextField";
import { User } from "../../typescript/interfaces";
import * as Yup from "yup";
import { useFormik } from "formik";
import AppButton from "../../src/components/common/Form/Button";
import { diff } from "deep-object-diff";
import UserShow from "../../src/components/features/Users/templates/UserShow";

function UserPage() {
  return (
    <>
      <Head>
        <title>Hyrova admin - User</title>
      </Head>
      <WideMobileFullHeightCard>
        <UserShow />
      </WideMobileFullHeightCard>
    </>
  );
}

export default UserPage;
