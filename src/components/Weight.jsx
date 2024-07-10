import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import ScaleIcon from "@mui/icons-material/Scale";

export const Weight = ({title,count}) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: "10px",
        backgroundColor: "#131732",
        textAlign: "center",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        "&:hover": {
          border: "1px solid skyblue",
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          <ScaleIcon />
          {title}
        </Typography>
        <Typography variant="h3" color="text.secondary">
          {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "skyblue" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
