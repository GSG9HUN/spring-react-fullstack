import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material";
import "./Movie.scss";
import IMovie from "../../utils/Movie";

interface props {
    movie: IMovie
}

export default function Movie({movie}: props) {
    return <Card className={"card"}>
        <CardMedia component={"img"} height={"140"} image={"https://source.unsplash.com/random"} alt={"random img"}/>
        <CardHeader title={movie.title}></CardHeader>
        <CardContent>
            <Typography variant={"h6"}>{movie.overview}</Typography>
        </CardContent>
        <CardActions>
            <Button></Button>
        </CardActions>
    </Card>;
}