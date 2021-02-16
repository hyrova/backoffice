import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardContent,
  Collapse,
  SwipeableDrawer,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { useToggle } from "../utils/hook";

function DefaultLayout(props) {
  const [open, setopen] = useState(false);

  const hide = () => setopen(false);
  const show = () => setopen(true);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  // const [on, toggle] = useToggle();

  return (
    <>
      <Head>
        <title>Hyrova admin - default</title>
        <meta charSet="utf-8" />
      </Head>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        open={open}
        onClose={hide}
        onOpen={show}
      >
        <Dropdown>
          <Dropdown.Button>Test</Dropdown.Button>
          <Dropdown.Content>APPEAR</Dropdown.Content>
        </Dropdown>
      </SwipeableDrawer>
      <div>
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
