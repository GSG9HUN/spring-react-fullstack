import Movie from "./Movie";
import React, {FormEvent, useEffect, useState} from "react";
import IMovie from "../../../utils/IMovie";
import {getPopularMovies, getMovieByName} from "../../../utils/requests";
import {Link} from "react-router-dom";
import {Pagination} from "@mui/material";
import Header from "../../../Components/Header/Header";
import SearchBar from "../../../Components/SearchBar/SearchBar";


export default function MovieList() {

    const [movies, setMovies] = useState<IMovie[]>([])
    const [searched, setSearched] = useState<boolean>(false)
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [movieName, setMovieName] = useState<string>("");

    useEffect(() => {
        callRequest()
    }, [pageNumber])


    const callRequest = () => {
        if (searched) {
            searchMovie()
        } else {
            popularMovie()
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSearched(true);
        setPageNumber(1);
        searchMovie();
    }

    const popularMovie = () => {
        getPopularMovies(pageNumber).then(response => {
            setMovies(response.results)
            setTotalPages(response.total_pages);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const searchMovie = () => {
        getMovieByName(movieName, pageNumber).then((response) => {
            setMovies(response.results)
            setTotalPages(response.total_pages)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
    }

    const reset = () => {
        setSearched(false);
        setPageNumber(1)
        popularMovie();
    }

    return <>
        <Header>
            <form onSubmit={handleSubmit}>
                <SearchBar movieName={movieName} setMovieName={setMovieName} reset={reset}/>
            </form>
        </Header>
        <div className={"content"}>
            {movies.map((movie: IMovie) => {
                return <Link className={"link card"} key={movie.id} to={`/movie/${movie.id}`}
                             children={<Movie movie={movie}></Movie>}/>
            })}
        </div>
        <div className={"pagination"}>
            <Pagination page={pageNumber} count={totalPages} color="primary"
                        onChange={(event, value) => setPageNumber(value)}/>
        </div>
    </>
}