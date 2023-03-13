import logo from "../../logo.svg";
import React from "react";

export default function Logo() {
    return (
        <div className={"left"}>
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
    )
}