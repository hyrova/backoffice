import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";
import DefaultLayout from "./default";
import GuestLayout from "./guest";

const layouts = {
  default: DefaultLayout,
  guest: GuestLayout,
};

const fetchUser = async () => {
  return setTimeout(() => {
    return {
      pseudal: "yolo",
      email: "yolo@mail.com",
    };
  }, 2000);
};

const LayoutWrapper = (props) => {
  const { token, user, setuser } = useAppContext();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log(props.children.type.auth);
    console.log(
      "auth requis:",
      props.children.type.auth === undefined ? true : props.children.type.auth
    );
    checkUser();
  }, []);

  const checkUser = async () => {
    const authRequired =
      props.children.type.auth === undefined ? true : props.children.type.auth;

    if (authRequired) {
      if (!token) {
        console.log("Pas de token, on devrait rediriger");
        // Redirection mais on s'en balec
      }

      const newUser = await fetchUser();

      if (!newUser) {
        console.log("Pas de user, on devrait rediriger");
        // Redirection mais on s'en balec
      }

      setuser(newUser);
      setloading(false);
    } else {
      setloading(false);
      if (!token) {
        console.log("Pas de token, mais la connexion n'est pas requise");
      }

      const newUser = await fetchUser();
      if (newUser) {
        setuser(newUser);
      } else {
        console.log("Pas de user, mais la connexion n'est pas requise");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  /**
   * Logique affichage Layout
   */

  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout];
  // if we have a registered layout render children with said layout

  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  // if not render children with fragment
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};

export default LayoutWrapper;
