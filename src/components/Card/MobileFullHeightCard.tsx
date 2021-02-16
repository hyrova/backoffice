import { Box, Card, makeStyles, useMediaQuery } from "@material-ui/core";
import React from "react";
import LoginForm from "../../templates/LoginForm";

export default function MobileFullHeightCard({ children }) {
  const matches = useMediaQuery("(min-width:600px)");

  const useStyles = makeStyles((theme) => ({
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.grey[900],
      width: "100%",
      maxWidth: matches ? 448 : "none",
      margin: "auto",
      padding: theme.spacing(6, 5),
      height: matches ? "auto" : "100%",
    },
  }));

  const classes = useStyles();

  return (
    <Box height="100%" className={classes.box}>
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
