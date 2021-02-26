import Guard from "./guard";
import LayoutWrapper from "./layouts/layout-wrapper";

const LogicWrapper = (props) => {
  const layout = props.children.type.layout;
  const auth = props.children.type.auth;
  const guest = props.children.type.guest;

  return (
    <Guard guest={guest} auth={auth}>
      <LayoutWrapper layout={layout}>{props.children}</LayoutWrapper>
    </Guard>
  );
};

export default LogicWrapper;
