import {Avatar} from "@mui/material";
import {posterPath} from "../../../const/urls";
import "../../../utils/Avatars.scss";
import IDirector from "../../../utils/IDirector";

interface props {
    directors: IDirector[]
}

export default function Directors({directors}: props) {
    return <div className={"directors"}>
        <h2>{directors.length > 1 ? "Rendezők" : "Rendező"}</h2>
        <div className={"avatars"}>
            {directors.map((director, index) => {
                return <div key={index}>
                    <Avatar alt={director.name} src={posterPath + director.profile_path}></Avatar>
                    <h6>{director.name}</h6>
                </div>
            })}
        </div>
    </div>
}