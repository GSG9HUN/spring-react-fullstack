import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import IComment from "../../utils/IComment";
import Comment from "./Comment/Comment";
import AddNewComment from "./Comment/AddNewComment";
import {getAvgScore, getMovieByID, getCommentsToMovie} from "../../utils/requests"
import IMovie from "../../utils/IMovie";
import Actors from "./Actors/Actors";
import Directors from "./Directors/Directors";
import SpecificMovieDetails from "./SpecificMovieDetails";
import MovieRating from "./Score/MovieRating";


export default function SpecificMovie() {
    const movieID = Number(useParams().id);

    const [comments, setComments] = useState<IComment[]>([])
    const [avgScore, setAvgScore] = useState<number>(0);
    const [movie, setMovie] = useState<IMovie>({
        id: '',
        title: '',
        overview: '',
        poster_path: '',
        budget: 0,
        release_date: ""
    });
    useEffect(() => {
        getAvgScore(movieID).then(response => {
            setAvgScore(response)
        });
        getMovieByID(movieID).then(response => {
            setMovie(response)
        })
        getCommentsToMovie(movieID).then(response => {
            setComments(response)
        })
    }, [])


    const refreshComments = () => {
        getCommentsToMovie(movieID).then(response => {
            setComments(response)
        })
    }

    console.log(avgScore)
    //ide kell majd poszert imdb link comment avg score és stb
    return <div className={"content"}>
        <SpecificMovieDetails movie={movie} avgScore={avgScore}/>
        <MovieRating movieID={movieID}/>
        <AddNewComment movieID={movieID} refreshComments={refreshComments}/>
        <Comment refreshComments={refreshComments} comments={comments}/>

    </div>
}