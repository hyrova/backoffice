import {
  Link,
  makeStyles,
  SwipeableDrawer,
  useMediaQuery,
} from "@material-ui/core";
import { useState } from "react";
import Dropdown, { Anchor } from "../../common/Dropdown/Dropdown";
import navigation, { NavigationDropdown, NavigationLink } from "./navigation";

function isLink(obj: any): obj is NavigationLink {
  return obj && obj.href;
}

function isDropdown(obj: any): obj is NavigationDropdown {
  return obj && obj.subNavigation;
}

const NavigationDropdownComponent = (props: NavigationDropdown) => (
  <Dropdown key={props.name}>
    <Dropdown.Button icon={props.icon}>{props.name}</Dropdown.Button>
    <Dropdown.Content>
      {props.subNavigation.map((dropdownChild) => {
        if (isLink(dropdownChild)) {
          return (
            <Dropdown.Link key={dropdownChild.name} href={dropdownChild.href}>
              Test
            </Dropdown.Link>
          );
        }

        if (isDropdown(dropdownChild)) {
          return (
            <NavigationDropdownComponent
              key={dropdownChild.name}
              {...dropdownChild}
            />
          );
        }
      })}
    </Dropdown.Content>
  </Dropdown>
);

const SidebarNavigation = () => {
  return (
    <>
      {navigation.map((child) => {
        if (isLink(child)) {
          return (
            <Anchor key={child.name} href={child.href}>
              Test
            </Anchor>
          );
        }

        if (isDropdown(child)) {
          return <NavigationDropdownComponent key={child.name} {...child} />;
        }
      })}
    </>
  );
};

export default function Navigation() {
  const [open, setopen] = useState(false);

  const hide = () => setopen(false);
  const show = () => setopen(true);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery("(min-width:600px)");

  const useStyles = makeStyles((theme) => ({
    drawer: {
      backgroundColor: theme.palette.grey[900],
      maxWidth: 300
    },
  }));

  const classes = useStyles();

  if (matches) {
    return (
      <div className={classes.drawer}>
        <SidebarNavigation />
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
      <SidebarNavigation />
    </SwipeableDrawer>
  );
}
