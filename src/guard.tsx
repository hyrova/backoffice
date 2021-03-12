import { useEffect, useState } from "react";
import { useAppContext } from "./context/state";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import useFetch from "use-http";
import { User } from "../typescript/interfaces";

const Guard = ({ auth, guest, children }) => {
  const { token, setuser } = useAppContext();
  const [loading, setloading] = useState(true);
  const router = useRouter();
  const { get, error, response } = useFetch("/me");

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const authRequired = auth === undefined ? true : auth;
    const guestRequired = guest === undefined ? false : guest;

    // Route is protected by authentication
    if (authRequired) {
      if (!token) {
        // We don't have any token, let's redirect to login
        await router.replace("/login");
        setloading(false);
        return;
      }

      // We have a token so let's see if that user actually exists
      const data = await get();

      if (!response.ok) {
        // We have an error, which probably means user doesn't exists, let's redirect to login
        await router.replace("/login");
        setloading(false);
        return;
      }

      // We have a user, we update it in our global state, and end the loading
      setuser(data.data);
      setloading(false);
      return;
    }

    if (guestRequired) {
      if (token) {        
        // We have a token so let's see if that user actually exists
        const data = await get();
        
        if (response.ok) {
          // User exists, he should not be able to see this page
          await router.replace("/");
          setuser(data.data);
          setloading(false);
          return;
        }
      }
    }

    // The page is not protected by authentication, we end the loading immediatly
    setloading(false);

    // Still, we try to update user data
    if (token) {
      const response = await get();
      if (response?.ok) {
        setuser(response.data);
      }
    }
  };

  if (loading) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  return children;
};

export default Guard;
