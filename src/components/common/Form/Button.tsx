import {
  Button,
  ButtonProps,
  LinearProgress,
  createStyles,
  makeStyles,
} from "@material-ui/core";

interface AppButtonProps extends ButtonProps {
  /** If `true`, the button will display a LinearProgress at the bottom */
  loading?: boolean;
}

const useStyles = makeStyles(() =>
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
      height: 2,
    },
  })
);

export default function AppButton(props: AppButtonProps) {
  const classes = useStyles();

  const { disabled, loading, children, ...rest } = props;

  return (
    <div className={classes.wrapper}>
      <Button
        {...rest}
        type="submit"
        variant="contained"
        color="primary"
        disabled={disabled || loading}
      >
        {children}
      </Button>
      <div className={classes.buttonProgress}>
        {loading && <LinearProgress color="primary" />}
      </div>
    </div>
  );
}
