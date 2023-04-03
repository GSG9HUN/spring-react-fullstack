import {useEffect, useState} from "react";
import {backendURL} from "../const/urls";
import IMovie from "../utils/IMovie";
import axios from "axios";

export const useMovie = (movieID: number) => {

    const [movie, setMovie] = useState<IMovie>({
        poster_path: "",
        release_date: "",
        budget: 0,
        overview: "",
        title: "",
        id: "",
        imdb_id: ""
    });

    useEffect(() => {
        axios.get(`${backendURL}/getMovie/${movieID}`).then((response) => {
            setMovie(response.data)
        })
    }, [movieID])

    return {movie}
}

export default useMovie;