import React, {useState} from 'react';
import logo from "../../logo.svg"
import "./Header.scss"
import {TextField} from "@mui/material";
import {IconButton} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header() {

    const [movieName, setMovieName] = useState<String>("");


    return <div className={"header"}>
        <div className={"left"}>
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <div className={"middle"} style={{color: "white"}}>
            <TextField id="standard-basic" label="MovieName" variant="standard"
                       value={movieName}
                       onChange={(e) => setMovieName(e.target.value)}/>
            <IconButton><SearchOutlinedIcon/></IconButton>
        </div>
    </div>
}