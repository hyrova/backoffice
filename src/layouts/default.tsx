import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardContent,
  Collapse,
  SwipeableDrawer,
  Typography,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/features/Navigation/Navigation";
import { useToggle } from "../utils/hook";

function DefaultLayout(props) {
  const [open, setopen] = useState(false);

  const hide = () => setopen(false);
  const show = () => setopen(true);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  // const [on, toggle] = useToggle();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Head>
        <title>Hyrova admin - default</title>
        <meta charSet="utf-8" />
      </Head>
      <div className="page-container">
        <Navigation />
        <div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
