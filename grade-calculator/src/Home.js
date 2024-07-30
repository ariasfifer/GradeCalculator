import React from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                <box style={{backgroundColor: "purple", height: "25%", width: "100%"}}>
                    <Typography sx={{fontSize: "1vw", fontWeight: 'bold', padding: "3%"}}>Learning Component Credit: </Typography>

                    <div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        Accordion 1
                        </AccordionSummary>
                        <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                        Accordion 2
                        </AccordionSummary>
                        <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        >
                        Accordion Actions
                        </AccordionSummary>
                        <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                        <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                        </AccordionActions>
                    </Accordion>
                    </div>
                </box>
                <box style={{backgroundColor: "yellow",height: "25%",width: "100%"}}>Mastery</box>
                <box style={{backgroundColor: "green",height: "25%",width: "100%"}}>Exam</box>
                <box style={{backgroundColor: "blue",height: "25%",width: "100%"}}>Total</box>
                </Paper>
            </Stack>
        </Box>
    );
}