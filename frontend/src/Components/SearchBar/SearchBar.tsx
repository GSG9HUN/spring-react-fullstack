import {Button, IconButton, TextField} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";

interface props {
    movieName: string,
    setMovieName: Function,
    reset: Function,
}

export default function SearchBar({movieName, setMovieName, reset}: props) {
    return <div className={"middle"} style={{color: "white"}}>
        <TextField id="standard-basic" label="MovieName" variant="standard"
                   value={movieName}
                   onChange={(e) => setMovieName(e.target.value)}/>
        <IconButton type={"submit"}><SearchOutlinedIcon/></IconButton>
        <Button onClick={() => reset()} variant="contained">Reset</Button>
    </div>
}
