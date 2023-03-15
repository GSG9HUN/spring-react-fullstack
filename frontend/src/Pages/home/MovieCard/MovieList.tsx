import Movie from "./Movie";
import React, {useEffect, useState} from "react";
import IMovie from "../../../utils/IMovie";
import {getPopularMovies} from "../../../utils/requests";
import {Link} from "react-router-dom";
import {Pagination} from "@mui/material";


export default function MovieList() {

    const [movies, setMovies] = useState<IMovie[]>([])
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getPopularMovies(pageNumber).then(response => {
            setMovies(response.results)
            setTotalPages(response.total_pages);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }, [pageNumber])


    return <div className={"content"}>
        {movies.map((movie: IMovie) => {
            return <Link className={"link card"} key={movie.id} to={`/movie/${movie.id}`}
                         children={<Movie movie={movie}></Movie>}/>
        })}
        <Pagination count={totalPages} color="primary" onChange={(event, value) => setPageNumber(value)}/>
    </div>
}