import {useParams} from "react-router-dom";
import React, {useState} from "react";
import Comment from "./Comment/Comment";
import AddNewComment from "./Comment/AddNewComment";
import Actors from "./Actors/Actors";
import Directors from "./Directors/Directors";
import SpecificMovieDetails from "./SpecificMovieDetails";
import MovieRating from "./Score/MovieRating";
import Header from "../../Components/Header/Header";
import useActors from "../../hooks/useActors"
import useMovie from "../../hooks/useMovie";
import useAvgScore from "../../hooks/useAvgScore";
import useDirectors from "../../hooks/useDirectors";
import useComments from "../../hooks/useComments";
import IComment from "../../utils/IComment";
import {getCommentsToMovie} from "../../utils/requests";

export default function SpecificMovie() {
    const movieID = Number(useParams().id);

    const {actors} = useActors(movieID);
    const {directors} = useDirectors(movieID);
    const [comments, setComments] = useState<IComment[]>(useComments(movieID))
    const {avgScore} = useAvgScore(movieID);
    const {movie} = useMovie(movieID);

    const refreshComments = () => {
        getCommentsToMovie(movieID).then(response => {
            setComments(response)
        })
    }

    return <>
        <Header></Header>
        <div className={"content"}>
            <SpecificMovieDetails movie={movie} avgScore={avgScore}/>
            <MovieRating movieID={movieID}/>
            <Directors directors={directors}></Directors>
            <Actors actors={actors}></Actors>
            <AddNewComment movieID={movieID} refreshComments={refreshComments}/>
            <Comment refreshComments={refreshComments} comments={comments}/>
        </div>
    </>


}