import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
} from "@mui/material";
import "./Movie.scss";
import IMovie from "../../../utils/Movie";
import {posterPath} from "../../../const/urls";

interface props {
    movie: IMovie
}

export default function Movie({movie}: props) {
    return <Card className={"card"} style={{maxHeight:600}}>
        <CardMedia component={"img"} height={"400"} image={posterPath + movie.poster_path}
                   alt={"random img"}/>
        <CardHeader title={movie.title}></CardHeader>
        <CardContent>
            <Box
                fontSize="span.fontSize"
                component="span"
                style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    textOverflow: "ellipsis",
                    //whiteSpace={"nowrap"}
                }}
            >
                {movie.overview}
            </Box>

        </CardContent>
        <CardActions>
            <Button></Button>
        </CardActions>
    </Card>;
}