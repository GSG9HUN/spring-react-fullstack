import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom";
import Logo from "./Logo";

export default function Header(props: any) {
    return <div className={"header"}>
        <Link to={"/"} children={<Logo/>}/>
        {props.children}
    </div>
}