import { Box, Card, makeStyles, useMediaQuery } from "@material-ui/core";
import React from "react";

export default function WideMobileFullHeightCard({ children }) {
  const matches = useMediaQuery("(min-width:600px)");

  const useStyles = makeStyles((theme) => ({
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: matches ? theme.spacing(0, 10) : "unset",
      // height: "100%"
      minHeight: "100vh"
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.grey[900],
      width: "100%",
      maxWidth: matches ? 800 : "none",
      margin: matches ? theme.spacing(10, 0) : "auto",
      padding: theme.spacing(6, 5),
      minHeight: matches ? "auto" : "100vh",
      height: matches ? "auto" : "100%",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Card
        square={!matches}
        variant={matches ? "outlined" : "elevation"}
        elevation={0}
        className={classes.card}
      >
        {children}
      </Card>
    </Box>
  );
}
