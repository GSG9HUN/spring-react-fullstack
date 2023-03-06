import axios from "axios";

export const getPopularMovies = async () => {
    const response = await axios.get("url")
    return response.data
}

export const getMovieByID = async (id: number) => {
    const response = await axios.get(`url/${id}`)
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