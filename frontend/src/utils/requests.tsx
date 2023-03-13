import axios from "axios";
import {backendURL} from "../const/urls";
export const getPopularMovies = async () => {
    const response = await axios.get(backendURL + "/getPopularMovies", config);
    return response.data
}

export const getMovieByID = async (id: number) => {
    const response = await axios.get(`${backendURL}/getMovie/${id}`)
    return response.data
}

export const getMovieByName = async (name: String) => {
    const response = await axios.get('');
    return response.data
}

export const storeScoreToMovie = async (movieID: number, score: number) => {
    const response = await axios.post('', {});
    return response.data
}

export const storeCommentToMovie = async (movieID: number, comment: String) => {

    const response = await axios.post('', {});
    return response.data
}


const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
    }
}