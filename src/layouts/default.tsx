import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useToggle } from "../utils/hook";

function DefaultLayout(props) {
  const [open, setopen] = useState(true);

  const hide = () => setopen(false);
  const show = () => setopen(true);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <Head>
        <title>Default</title>
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
        Test
        <Accordion elevation={0} variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </SwipeableDrawer>
      <div>
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
