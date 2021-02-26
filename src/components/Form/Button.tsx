import {
  Button,
  ButtonProps,
  LinearProgress,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

interface AppButtonProps extends ButtonProps {
  loading?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      borderRadius: 4,
      overflow: "hidden",
    },
    buttonProgress: {
      position: "absolute",
      width: "100%",
      bottom: 0,
      height: 2
    },
  })
);

export default function AppButton(props: AppButtonProps) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={props.loading}
        {...props}
      >
        {props.children}
      </Button>
      <div className={classes.buttonProgress}>
        {props.loading && <LinearProgress color="primary" />}
      </div>
    </div>
  );
}
