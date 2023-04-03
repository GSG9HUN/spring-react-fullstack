import "./MovieContent.scss"
import {posterPath} from "../../const/urls";
import IMovie from "../../utils/IMovie"
import {Link, Rating} from "@mui/material";
import IMDB from "../../img/imdb.jpg"
import {imdbURL} from "../../const/urls"

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
        <div className={'details'}>
            <h2>{movie.title}</h2>
            <div>
                <h2>Release date: {movie.release_date}</h2>
            </div>
            <div className={"overview"}>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
            </div>
            <div className={"budget"}>
                <h2>Budget: {movie.budget} $</h2>
            </div>
            <div className={"imdb"}>
                <Link target={"__blank"} href={imdbURL + movie.imdb_id}>
                    <h2>IMDB link:</h2>
                    <img alt={"imdb_logo"} src={IMDB}/>
                </Link>
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