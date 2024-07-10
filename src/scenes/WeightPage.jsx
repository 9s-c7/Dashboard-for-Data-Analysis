import React from "react";
import { Production } from "../components/Production";
import { Weight } from "../components/Weight";
import './WeightPage.css';
import { Box } from "@mui/system";
import { HourglassBottom } from "@mui/icons-material";
import FactoryIcon from '@mui/icons-material/Factory';
import { Divider } from "@mui/material";


export const WeightPage = () => {
  return (
    <>
    <Box className="parent" margin="20px">
      <div className="div1"> <Production title="Production" text="text about production" icon={<FactoryIcon/>} /></div>
      <div className="div2"> <Production title="Downtime" text="text about Downtime" icon={<HourglassBottom/>}/> </div>
      <div className="div3"> <Weight title="5 kg" count="1"/> </div>
      <div className="div4">  <Weight title="10 kg" count="1"/></div>
      <div className="div5">  <Weight title="15 kg" count="1"/></div>
      <div className="div6">  <Weight title="20 kg" count="1"/></div>
      <div className="div7">  <Weight title="26 kg" count="1"/></div>
      <div className="div8">  <Weight title="30 kg" count="1"/></div>
      <div className="div9">  <Weight title="50 kg" count="1"/></div>
    </Box>
    </>
  );
};
