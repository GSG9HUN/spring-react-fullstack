import axios from "axios";
import {backendURL} from "../const/urls";

export const getPopularMovies = async (pageNumber: number = 1) => {
    const response = await axios.get(backendURL + `/getPopularMovies?pageNumber=${pageNumber}`);
    return response.data
}

export const getMovieByID = async (id: number) => {
    const response = await axios.get(`${backendURL}/getMovie/${id}`)
    return response.data
}

export const getMovieByName = async (name: string, pageNumber: number) => {
    const response = await axios.get(`${backendURL}/getMovieByName?name=` + name + "&pageNumber=" + pageNumber);
    return response.data
}

export const getAvgScore = async (movieID: number) => {
    const response = await axios.get(`${backendURL}/score/${movieID}`)
    return response.data;
}

export const storeScoreToMovie = async (movieID: number, score: number) => {
    const response = await axios.post(`${backendURL}/score`, {
        movieID: movieID, score: score
    });
    return response.data
}

export const storeCommentToMovie = async (movieID: number, comment: String) => {
    const response = await axios.post(`${backendURL}/comment`, {
        movieID: movieID, comment: comment
    });
    return response.data
}

export const getCommentsToMovie = async (movieID: number) => {
    const response = await axios.get(`${backendURL}/comment/${movieID}`);
    return response.data;
}

export const deleteComment = async (commentID: number) => {
    const response = await axios.delete(`${backendURL}/comment/${commentID}`)
    return response.data;
}

export const getActors = async (movieID: number) => {
    const response = await axios.get(`${backendURL}/getActors/${movieID}`)
    return response.data;
}