import { Button, ButtonProps } from "@material-ui/core";

export default function AppButton(props: ButtonProps) {
  return (
    <Button type="submit" variant="contained" color="primary" {...props}>
      {props.children}
    </Button>
  );
}
