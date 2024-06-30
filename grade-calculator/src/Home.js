import React from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function Home (){
    return (
        <Box>
            <Stack style={{display: "flex", alignItems: "center", backgroundColor: "#E6E4E4" }}>
                <Box  style ={{height: '10vh', width: '70%', backgroundColor: "#E6E4E4", display: "flex", alignItems: "center"}}>
                    <box>
                        <Typography sx={{fontSize: "1.5vw", fontWeight: 'bold'}}>Calculus 1 Grade Calculator</Typography>
                        <Typography sx={{fontSize: "1vw", fontWeight: '400'}}>Calculate your Calc 1 letter grade or explore what-if scenarios.</Typography>
                    </box>
                </Box>
                <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: '90vh',width: '70%', backgroundColor: "#d3d3d3"}}>
                <box style={{backgroundColor: "red", height: "25%", width: "100%"}}>Learning</box>
                <box style={{backgroundColor: "yellow",height: "25%",width: "100%"}}>Mastery</box>
                <box style={{backgroundColor: "green",height: "25%",width: "100%"}}>Exam</box>
                <box style={{backgroundColor: "blue",height: "25%",width: "100%"}}>Total</box>
                </Paper>
            </Stack>
        </Box>
    );
}