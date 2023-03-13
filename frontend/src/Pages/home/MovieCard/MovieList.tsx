import Movie from "./Movie";
import React, {useEffect, useState} from "react";
import IMovie from "../../../utils/Movie";
import {getPopularMovies} from "../../../utils/requests";
import {Link} from "react-router-dom";


export default function MovieList() {

    const [movies, setMovies] = useState<IMovie[]>([])


    useEffect(() => {
        getPopularMovies().then(response => setMovies(response.results));
    }, [])


    return <div className={"content"}>
        {movies.map((movie: IMovie) => {
            return <Link className={"link card"} key={movie.id} to={`/movie/${movie.id}`}
                         children={<Movie movie={movie}></Movie>}/>
        })}
    </div>
}