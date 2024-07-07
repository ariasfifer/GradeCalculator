import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function MasterCredit (){
    return (
        <box style={{backgroundColor: "white",width: "100%", border: "1px solid #00274C",borderRadius: "10px", margin: "30px"}}>
                    <box style={{backgroundColor: "#d6ecf3",display: "flex", width: "100%", borderBottom: "1px solid #00274C", borderRadius: "10px 10px 0 0"}}>
                    <Typography sx={{fontSize: "24px", fontWeight: "bold", color: "#00274C", margin: "15px"}}>Mastery Credit: 100%</Typography>
                    </box>
                    <Box sx={{padding: "20px", padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", justifyItems: "center", gap: "2rem"}}>

                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Mastery 1: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Mastery 2: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Mastery 3: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>
                    <div>
                    <Typography sx={{fontSize: "17px", fontWeight: "600", color: "#00274C"}}>Mastery 4: </Typography>
                    <TextField id="outlined-basic" defaultValue="100%" variant="outlined" />
                    </div>

                    </Box>
        </box>
    );
}