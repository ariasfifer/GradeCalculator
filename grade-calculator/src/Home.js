import React from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import Container from "@mui/material";

export default function Home (){
    return (
        <Box>
            <Stack style={{display: "flex", alignItems: "center", backgroundColor: "#BDD8E6" }}>
                <Paper  style ={{height: '10vh', width: '70%', backgroundColor: "#ECECEC"}}><box>Title</box></Paper>
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