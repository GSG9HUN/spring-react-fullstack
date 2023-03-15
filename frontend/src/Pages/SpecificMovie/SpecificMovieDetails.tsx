import "./MovieContent.scss"
import {posterPath} from "../../const/urls";
import IMovie from "../../utils/IMovie"
import {Rating} from "@mui/material";

interface props {
    movie: IMovie,
    avgScore: number
}

export default function SpecificMovieDetails({movie, avgScore}: props) {
    if (!movie.poster_path) {
        return <></>
    }
    return <div className={"movieContent"}>
        <div className={'poster'}>
            <img src={posterPath + movie.poster_path} alt={"movie img"}/>
        </div>
        <div className={'overview'}>
            <h2>{movie.title}</h2>
            <div>
                <h2>Release date: {movie.release_date}</h2>
            </div>
            <div>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
            </div>
            <div>
                <h2>Budget: {movie.budget} $</h2>
            </div>
            <div>
                <h2>Rating</h2>
                <div className={"rating"}>
                    <Rating disabled={true} value={avgScore} precision={0.1}/>
                </div>
            </div>
        </div>
    </div>
}