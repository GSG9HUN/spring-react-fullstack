import React, {useState} from 'react';
import "./Header.scss"
import {TextField} from "@mui/material";
import {IconButton} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from "react-router-dom";
import Logo from "./Logo";

export default function Header() {

    const [movieName, setMovieName] = useState<String>("");


    return <div className={"header"}>
        <Link to={"/"} children={<Logo/>}/>
        <div className={"middle"} style={{color: "white"}}>
            <TextField id="standard-basic" label="MovieName" variant="standard"
                       value={movieName}
                       onChange={(e) => setMovieName(e.target.value)}/>
            <IconButton><SearchOutlinedIcon /></IconButton>
        </div>
    </div>
}