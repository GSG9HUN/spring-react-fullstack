import Movie from "./Movie";
import React from "react";
import IMovie from "../../utils/Movie";

interface props {
    movies: IMovie[]
}

export default function MovieList({movies}: props) {

    return <div className={"content"}>
        {movies.map((movie: IMovie, index: number) => {
            return <Movie key={index} movie={movie}></Movie>
        })}
    </div>
}