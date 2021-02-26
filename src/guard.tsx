import { useEffect, useState } from "react";
import { useAppContext } from "./context/state";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const fetchUser = async () => {
  return new Promise(function (resolve, reject) {
    // Setting 2000 ms time
    setTimeout(resolve, 2000);
  }).then(function () {
    return {
      pseudal: "yolo",
      email: "yolo@mail.com",
    };
  });
};

const Guard = ({ auth, children }) => {
  const { token, user, setuser } = useAppContext();
  const [loading, setloading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    console.log("User changed");
  }, [user]);

  const checkUser = async () => {
    const authRequired = auth === undefined ? true : auth;

    if (authRequired) {
      if (!token) {
        router.replace("/login");
      }

      const newUser = await fetchUser();

      if (!newUser) {
        router.replace("/login");
      }

      setuser(newUser);
      setloading(false);
    } else {
      setloading(false);
      if (token) {
        const newUser = await fetchUser();
        if (newUser) {
          setuser(newUser);
        }
      }
    }
  };

  if (loading) {
    return (
      <div>
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
      </div>
    );
  }

  return children;
};

export default Guard;
