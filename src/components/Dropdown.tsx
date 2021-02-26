import {
  Collapse,
  Grid,
  ButtonBase,
  makeStyles,
  Link,
  Icon,
} from "@material-ui/core";
import { ExpandLessRounded, ExpandMoreRounded } from "@material-ui/icons";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { useToggle } from "../utils/hook";

interface DropdownProps {
  on: boolean;
  toggle(): void;
}

const DropdownContext = createContext(null);

const useDropdownContext = (): DropdownProps => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      `InputGroup compound components cannot be rendered outside the InputGroup component`
    );
  }
  return context;
};

function Button({ children, icon }) {
  const { toggle, on } = useDropdownContext();

  const useStyles = makeStyles((theme) => ({
    button: {
      width: "100%",
      padding: theme.spacing(2, 3),
      color: on ? theme.palette.primary.main : "inherit",
    },
    icon: {
      marginRight: theme.spacing(2),
      width: 24,
    },
  }));

  const classes = useStyles();

  return (
    <ButtonBase onClick={toggle} className={classes.button}>
      <Icon className={classes.icon}>{icon}</Icon>
      <Grid container justify="space-between" alignItems="center">
        {children}
        {on ? <ExpandLessRounded /> : <ExpandMoreRounded />}
      </Grid>
    </ButtonBase>
  );
}

function Content({ children }) {
  const { on } = useDropdownContext();

  const useStyles = makeStyles((theme) => ({
    collapse: {
      maxWidth: 300,
      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <Collapse in={on} timeout="auto" className={classes.collapse}>
      {children}
    </Collapse>
  );
}

function Anchor({ children, href, active = false }) {
  const useStyles = makeStyles((theme) => ({
    link: {
      padding: theme.spacing(2, 3),
      width: "100%",
      paddingLeft: 48 + theme.spacing(2),
      backgroundColor: active ? theme.palette.primary.main : "inherit",
    },
  }));

  const classes = useStyles();
  const router = useRouter();

  return (
    <ButtonBase onClick={() => router.push(href)} className={classes.link}>
      <Grid container justify="space-between" alignItems="center">
        {children}
      </Grid>
    </ButtonBase>
  );
}

function Dropdown({ children }) {
  const [on, toggle] = useToggle();

  return (
    <DropdownContext.Provider value={{ on, toggle }}>
      {children}
    </DropdownContext.Provider>
  );
}

Dropdown.Button = Button;
Dropdown.Content = Content;
Dropdown.Link = Anchor;

export default Dropdown;
