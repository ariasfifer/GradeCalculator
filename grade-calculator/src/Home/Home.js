import React from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import MasterCredit from "../Components/MasteryCredit/MasteryCredit";

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
                <box style={{backgroundColor: "#d6ecf3",display: "flex", width: "10%", border: "2px solid #00274C", borderRadius: "5px", marginLeft: "5%", justifyContent:"center"}}>
                <Typography sx={{fontSize: "40px", fontWeight: '400', color: "#00274C"}}> 100% </Typography>
                </box>
                </div>

                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around",width: '70%', }}>


                <box style={{backgroundColor: "white",width: "100%", border: "1px solid #00274C",borderRadius: "10px", margin: "30px"}}>
                    <box style={{backgroundColor: "#d6ecf3",display: "flex", width: "100%", borderBottom: "1px solid #00274C", borderRadius: "10px 10px 0 0"}}>
                    <Typography sx={{fontSize: "24px", fontWeight: "bold", color: "#00274C", margin: "15px"}}>Learning Commponent Credit: 100%</Typography>
                    </box>
                    <Box sx={{display: "flex", flexDirection: "column", padding: "20px"}}>
                    <box style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}> Learning 1 </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}> Learning 2 </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </box>
                    <box style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingTop: "20px"}}>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}> Learning 3 </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}> Learning 4 </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </box>
                    </Box>
                </box>


                < MasterCredit />

                <box style={{backgroundColor: "white",width: "100%", border: "1px solid #00274C",borderRadius: "10px", margin: "30px"}}>
                    <box style={{backgroundColor: "#d6ecf3",display: "flex", width: "100%", borderBottom: "1px solid #00274C", borderRadius: "10px 10px 0 0"}}>
                    <Typography sx={{fontSize: "24px", fontWeight: "bold", color: "#00274C", margin: "15px"}}>Exam Credit: 100%</Typography>
                    </box>
                    <Box sx={{display: "flex", flexDirection: "column", padding: "20px"}}>
                    <box style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Midterm 1: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Midterm 2: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Final: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </box>
                    </Box>
                </box>

                </div>
            </Stack>
        </Box>
    );
}