import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';


export default function ChapterSelector() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    let [chapter, setChapter] = useState("CHAPTERS");
    let [selectedChapter, setSelectedChapter] = useState("");
    const open = Boolean(anchorEl);

    let chapterSections = {
        "CHAPTER 1" : "hi",
        "CHAPTER 2" : "hello",
        "CHAPTER 3" : "hey",
    }

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const chapterClick = (e) => {
        setChapter(e);
        handleClose();
        for(let chapter in chapterSections){
            if (e === chapter){
                console.log(chapterSections[chapter])
                setSelectedChapter(chapter)
            }
        }
    }

    return (
        <div style={{width:"100%"}}>
            <div>
                <Button
                sx={{backgroundColor:"#00274C", marginBottom: "15px", marginTop: "15px"}}
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                >
                {chapter}
                </Button>
                <Menu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                >
                <MenuItem  onClick={(e) => chapterClick("CHAPTER 1")} disableRipple>
                <FileCopyIcon sx={{color:"#00274C"}}/>
                    <Typography sx={{color:"#00274C"}}> Chapter 1 </Typography>
                    {selectedChapter === "CHAPTER 1"}
                </MenuItem>
                <MenuItem onClick={(e) => chapterClick("CHAPTER 2")} disableRipple>
                    <FileCopyIcon sx={{color:"#00274C"}}/>
                    <Typography sx={{color:"#00274C"}}> Chapter 2</Typography>
                    {selectedChapter === "CHAPTER 2"}
                </MenuItem>
                <MenuItem onClick={(e) => chapterClick("CHAPTER 3")} disableRipple>
                <FileCopyIcon sx={{color:"#00274C"}}/>
                    <Typography sx={{color:"#00274C"}}> Chapter 3</Typography>
                    {selectedChapter === "CHAPTER 3"}
                </MenuItem>
                <MenuItem onClick={(e) => chapterClick("CHAPTER 4")} disableRipple>
                <FileCopyIcon sx={{color:"#00274C"}}/>
                    <Typography sx={{color:"#00274C"}}> Chapter 4</Typography>
                    {selectedChapter === "CHAPTER 4"}
                </MenuItem>
                <MenuItem onClick={(e) => chapterClick("CHAPTER 5")} disableRipple>
                <FileCopyIcon sx={{color:"#00274C"}}/>
                    <Typography sx={{color:"#00274C"}}> Chapter 5</Typography>
                    {selectedChapter === "CHAPTER 5"}
                </MenuItem>
                <MenuItem onClick={(e) => chapterClick("CHAPTER 6")} disableRipple>
                <FileCopyIcon sx={{color:"#00274C"}}/>
                    <Typography sx={{color:"#00274C"}}> Chapter 6</Typography>
                    {selectedChapter === "CHAPTER 6"}
                </MenuItem>
                </Menu>
            </div>

            <div>
                {
                selectedChapter === ""
                ?
                null
                :
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))", gap: "1rem", width: "100%" }}>
                    <TextField id="outlined-basic" defaultValue="1.1" variant="outlined" size="small" sx={{}}/>
                    <TextField id="outlined-basic" defaultValue="1.2" variant="outlined" size="small" sx={{}}/>
                    <TextField id="outlined-basic" defaultValue="1.3" variant="outlined" size="small" sx={{}}/>
                    <TextField id="outlined-basic" defaultValue="1.4" variant="outlined" size="small" sx={{}}/>
                    <TextField id="outlined-basic" defaultValue="1.5" variant="outlined" size="small" sx={{}}/>
                    <TextField id="outlined-basic" defaultValue="1.6" variant="outlined" size="small" sx={{}}/>
                    <TextField id="outlined-basic" defaultValue="1.7" variant="outlined" size="small" sx={{}}/>
                    <TextField id="outlined-basic" defaultValue="1.8" variant="outlined" size="small" sx={{}}/>
                </div>
                }
            </div>

        </div>
    );
  }