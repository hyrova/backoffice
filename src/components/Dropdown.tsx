import {
  Collapse,
  Grid,
  ButtonBase,
} from "@material-ui/core";
import { ExpandLessRounded, ExpandMoreRounded } from "@material-ui/icons";
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

function Button({ children }) {
  const { toggle, on } = useDropdownContext();
  return (
    <ButtonBase
      onClick={toggle}
      style={{ width: "300px", padding: "12px 16px" }}
    >
      <Grid container justify="space-between" alignItems="center">
        {children}
        {on ? <ExpandLessRounded /> : <ExpandMoreRounded />}
      </Grid>
    </ButtonBase>
  );
}

function Content({ children }) {
  const { on } = useDropdownContext();
  return (
    <Collapse in={on} timeout="auto">
      {children}
    </Collapse>
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

export default Dropdown;
