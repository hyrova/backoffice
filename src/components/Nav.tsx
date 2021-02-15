import { Button } from "@material-ui/core";
import Link from "next/link";
import { useEffect } from "react";
import { useAppContext } from "../context/state";

export default function Nav() {
  const { count, setcount } = useAppContext();

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  useEffect(() => {
    console.log("refreshed");
  }, []);

  return (
    <div>
      <Link href="/">Accueil</Link>
      <Link href="/login">Login</Link>
      Je veux juste voir si ça change quelque chose de l'avoir dans un composant
      <p>{count}</p>
      <Button variant="contained" onClick={increment}>
        Increment
      </Button>
      <Button variant="contained" color="primary" onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
}
