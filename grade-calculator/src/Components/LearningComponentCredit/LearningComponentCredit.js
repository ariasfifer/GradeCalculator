import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography} from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ChapterSelector from "./Components/ChapterSelector";
import Button from '@mui/material/Button';

export default function MasterCredit (){
    return (
        <box style={{backgroundColor: "white",width: "100%", border: "1px solid #00274C",borderRadius: "10px", margin: "30px"}}>
            <box style={{backgroundColor: "#d6ecf3",display: "flex", width: "100%", borderBottom: "1px solid #00274C", borderRadius: "10px 10px 0 0", justifyContent: "space-between", alignItems: "center"}}>
                <Typography sx={{fontSize: "24px", fontWeight: "bold", color: "#00274C", margin: "15px"}}>Learning Component Credit: 100%</Typography>
                <div style={{ marginRight: "25px"}}>
                <Button variant="contained" sx={{backgroundColor:"#00274C"}}>Calculate</Button>
                </div>
            </box>
            <Box sx={{padding: "20px", padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", justifyItems: "center", gap: "2rem"}}>

            <div style={{width: "100%"}}>
            <Accordion sx ={{border: "1px solid #00274C"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography sx={{fontSize: "20px", fontWeight: "bold", color: "#00274C", margin: "15px"}}>Homework</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#ededed", borderTop: "1px solid #00274C"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
                <ChapterSelector/>
                </div>
                </AccordionDetails>
            </Accordion>
            <Accordion sx ={{border: "1px solid #00274C"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography sx={{fontSize: "20px", fontWeight: "bold", color: "#00274C", margin: "15px"}}>Prepwork</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#ededed", borderTop: "1px solid #00274C"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
                <ChapterSelector/>
                </div>
                </AccordionDetails>
            </Accordion>
            <Accordion sx ={{border: "1px solid #00274C"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography sx={{fontSize: "20px", fontWeight: "bold", color: "#00274C", margin: "15px"}}>Team Homework</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#ededed", borderTop: "1px solid #00274C"}}>
                <Box sx={{padding: "20px", padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", justifyItems: "center", gap: "2rem"}}>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Homework 1: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined"/>
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Homework 2: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Homework 3: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Homework 4: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Homework 5: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                </Box>
                </AccordionDetails>
            </Accordion >
            <Accordion sx ={{border: "1px solid #00274C"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                >
                <Typography sx={{fontSize: "20px", fontWeight: "bold", color: "#00274C", margin: "15px"}}>Quizzes</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#ededed", borderTop: "1px solid #00274C"}}>
                <Box sx={{padding: "20px", padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", justifyItems: "center", gap: "2rem"}}>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Quiz 1: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined"/>
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Quiz 2: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Quiz 3: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Quiz 4: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Quiz 5: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Quiz 6: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                </Box>
                </AccordionDetails>
            </Accordion>
            </div>
            </Box>
        </box>
    );
}