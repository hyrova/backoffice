import {
  ButtonBase,
  Link,
  makeStyles,
  SwipeableDrawer,
  useMediaQuery,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { runInContext } from "vm";
import { useAppContext } from "../../../context/state";
import Dropdown, { Anchor } from "../../common/Dropdown/Dropdown";
import navigation, {
  NavigationButton,
  NavigationDropdown,
  NavigationLink,
} from "./navigation";

function isLink(obj: any): obj is NavigationLink {
  return obj && obj.href;
}

function isDropdown(obj: any): obj is NavigationDropdown {
  return obj && obj.subNavigation;
}

function isButton(obj: any): obj is NavigationButton {
  return obj && obj.action;
}

export default function Navigation() {
  const [open, setopen] = useState(false);

  const hide = () => setopen(false);
  const show = () => setopen(true);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery("(min-width:1000px)");

  const useStyles = makeStyles((theme) => ({
    drawer: {
      backgroundColor: theme.palette.grey[900],
      maxWidth: 250,
    },
  }));

  const classes = useStyles();
  const router = useRouter()
  const { settoken } = useAppContext();

  function _logout() {
    
    router.push('/login')
    settoken(null)
  }
  
  function run(action) {
    switch (action) {
      case "_logout":
        _logout();
        break;
  
      default:
        break;
    }
  }
  
  function NavigationDropdownComponent(props: NavigationDropdown) {
    return (
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
  }
  
  function SidebarNavigation() {
    return (
      <>
        {navigation.map((child) => {
          if (isLink(child)) {
            return (
              <Anchor key={child.name} href={child.href}>
                {child.name}
              </Anchor>
            );
          }
  
          if (isDropdown(child)) {
            return <NavigationDropdownComponent key={child.name} {...child} />;
          }
  
          if (isButton(child)) {
            return (
              <Anchor key={child.name} action={() => run(child.action)}>
                {child.name}
              </Anchor>
            );
          }
        })}
      </>
    );
  }

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
