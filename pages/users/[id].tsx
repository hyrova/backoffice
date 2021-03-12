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

function UserPage() {
  function UserForm({ user }: { user: User }) {
    const LoginSchema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    const formik = useFormik({
      initialValues: user,
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        const change = diff(user, values);
        console.log({ change });
        put(change).then((data) => {
          setUser(data.data);
        });
      },
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <AppTextField
          id="standard-basic"
          name="name"
          label="Name"
          formik={formik}
        />
        <AppTextField
          name="email"
          id="standard-basic"
          label="Email"
          formik={formik}
          type="email"
        />
        <AppButton>Update</AppButton>
      </form>
    );
  }

  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<User>(null);

  const { loading, error, get, put, response } = useFetch(
    `http://localhost/api/admin/users/` + id
  );

  const fetchUser = async () => {
    const data = await get();

    if (response.ok) {
      setUser(data.data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Head>
        <title>Hyrova admin - User {id}</title>
      </Head>
      <WideMobileFullHeightCard>
        {user && <UserForm user={user} />}
      </WideMobileFullHeightCard>
    </>
  );
}

export default UserPage;
