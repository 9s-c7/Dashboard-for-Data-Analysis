import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export const Production = ({text , icon , title}) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "95%",
        borderRadius: "10px",
        backgroundColor: "#131732",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        "&:hover": {
          border: "1px solid skyblue",
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {icon}
          {title}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "bottom-right" }}>
        <Button size="large" sx={{ color: "skyblue" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
