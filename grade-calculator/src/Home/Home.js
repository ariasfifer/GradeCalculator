import React from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MasterCredit from "../Components/MasteryCredit/MasteryCredit";
import ExamCredit from "../Components/ExamCredit/ExamCredit";
import LearningComponentCredit from "../Components/LearningComponentCredit/LearningComponentCredit"

export default function Home (){
    return (
        <Box>
            <Stack style={{display: "flex", alignItems: "center", backgroundColor: "#E6E4E4" }}>
                <Box  style ={{ width: '70%', backgroundColor: "#E6E4E4", display: "flex", alignItems: "center",margin: "30px"}}>
                    <box>
                        <Typography sx={{fontSize: "24px", fontWeight: 'bold', color: "#00274C"}}>Calculus 1 Grade Calculator</Typography>
                        <Typography sx={{fontSize: "20px", fontWeight: '400', color: "#00274C"}}>Calculate your Calc 1 letter grade or explore what-if scenarios.</Typography>
                    </box>
                </Box>

                <div  style ={{ width: '70%', display: "flex", margin: "30px", alignItems:"center", justifyContent:"flex-start"}}>
                <Typography sx={{fontSize: "20px", fontWeight: 'bold', color: "#00274C"}}>Your current grade: </Typography>
                <box style={{backgroundColor: "#d6ecf3",display: "flex", border: "2px solid #00274C", borderRadius: "5px", marginLeft: "5%", justifyContent:"center"}}>
                <Typography sx={{fontSize: "40px", fontWeight: '400', color: "#00274C", padding: "3px"}}> 100% </Typography>
                </box>
                </div>

                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around",width: '70%', }}>

                <LearningComponentCredit />
                <MasterCredit />
                <ExamCredit />
                </div>
            </Stack>
        </Box>
    );
}