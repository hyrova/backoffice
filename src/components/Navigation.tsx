import { makeStyles, SwipeableDrawer, useMediaQuery } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Navigation() {
  const [open, setopen] = useState(false);

  const hide = () => setopen(false);
  const show = () => setopen(true);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery("(min-width:600px)");

  const useStyles = makeStyles((theme) => ({
    drawer: {
      backgroundColor: theme.palette.grey[900],
    },
  }));

  const classes = useStyles();

  if (matches) {
    return (
      <div className={classes.drawer}>
        <Dropdown>
          <Dropdown.Button icon="ac_unit">Test</Dropdown.Button>
          <Dropdown.Content>
            <Dropdown.Link href="/">Test</Dropdown.Link>
            <Dropdown.Link href="/">Test</Dropdown.Link>
            <Dropdown.Link href="/">Test</Dropdown.Link>
            <Dropdown.Link href="/">Test</Dropdown.Link>
            <Dropdown.Link href="/">Test</Dropdown.Link>
          </Dropdown.Content>
        </Dropdown>
      </div>
    );
  }

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor="left"
      open={open}
      onClose={hide}
      onOpen={show}
    >
      <Dropdown>
        <Dropdown.Button icon="ac_unit">Test</Dropdown.Button>
        <Dropdown.Content>
          <Dropdown.Link href="/">Test</Dropdown.Link>
        </Dropdown.Content>
      </Dropdown>
    </SwipeableDrawer>
  );
}
