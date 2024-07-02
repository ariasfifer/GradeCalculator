import React from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function LearningComponentSection (){
    return (
        <div>
        <Typography sx={{paddingBottom: "50px"}}>Below should be a dotted line</Typography>
        <hr sx={{ border: "none", borderTop: "1px dotted black", color: "blue",
  backgroundColor: "green",
  height: "10px",
  width: "50%"}} />
        </div>
    );
}