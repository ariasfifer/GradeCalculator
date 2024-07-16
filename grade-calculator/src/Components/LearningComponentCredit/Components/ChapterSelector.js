import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material';


export default function ChapterSelector() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    let [chapter, setChapter] = useState("CHAPTERS");
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const chapterClick = (e) => {
        setChapter(e);
        handleClose();
    }
    console.log("this is chapter: ", chapter)

    return (
      <div>
        <Button
          sx={{backgroundColor:"#00274C"}}
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
          </MenuItem>
          <MenuItem onClick={(e) => chapterClick("CHAPTER 2")} disableRipple>
            <FileCopyIcon sx={{color:"#00274C"}}/>
            <Typography sx={{color:"#00274C"}}> Chapter 2</Typography>
          </MenuItem>
          <MenuItem onClick={(e) => chapterClick("CHAPTER 3")} disableRipple>
          <FileCopyIcon sx={{color:"#00274C"}}/>
            <Typography sx={{color:"#00274C"}}> Chapter 3</Typography>
          </MenuItem>
          <MenuItem onClick={(e) => chapterClick("CHAPTER 4")} disableRipple>
          <FileCopyIcon sx={{color:"#00274C"}}/>
            <Typography sx={{color:"#00274C"}}> Chapter 4</Typography>
          </MenuItem>
          <MenuItem onClick={(e) => chapterClick("CHAPTER 5")} disableRipple>
          <FileCopyIcon sx={{color:"#00274C"}}/>
            <Typography sx={{color:"#00274C"}}> Chapter 5</Typography>
          </MenuItem>
          <MenuItem onClick={(e) => chapterClick("CHAPTER 6")} disableRipple>
          <FileCopyIcon sx={{color:"#00274C"}}/>
            <Typography sx={{color:"#00274C"}}> Chapter 6</Typography>
          </MenuItem>
        </Menu>
      </div>
    );
  }