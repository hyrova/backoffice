import { Button } from "@material-ui/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function Nav() {
  const { token, settoken } = useAppContext();

  const login = () => {
    settoken("token");
  };

  const logout = () => {
    settoken(null);
  };

  return (
    <div>
      <Link href="/">Accueil</Link>
      <Link href="/login">Login</Link>
      Je veux juste voir si ça change quelque chose de l'avoir dans un composant
      <Button variant="contained" onClick={login}>
        Login
      </Button>
      <Button variant="contained" color="primary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
