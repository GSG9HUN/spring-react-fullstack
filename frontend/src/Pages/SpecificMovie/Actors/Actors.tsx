import IActor from "../../../utils/IActor";
import {Avatar} from "@mui/material";
import {posterPath} from "../../../const/urls";
import "../../../utils/Avatars.scss";
interface props {
    actors: IActor[]
}

export default function Actors({actors}: props) {
    return <div className={"actors"}>
        <h2>Színészek</h2>
        <div className={"avatars"}>
            {actors.map((actor, index) => {
                return <div key={index}>
                    <Avatar alt={actor.name} src={posterPath + actor.profile_path}></Avatar>
                    <h6>{actor.name}</h6>
                </div>
            })}
        </div>
    </div>
}