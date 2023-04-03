import {useEffect, useState} from "react";
import {backendURL} from "../const/urls";
import axios from "axios";

export const useAvgScore = (movieID: number) => {

    const [avgScore, setAvgScore] = useState<number>(0);

    useEffect(() => {
        axios.get(`${backendURL}/score/${movieID}`).then((response) => {
            setAvgScore(response.data)
        })
    }, [movieID])

    return {avgScore}
}

export default useAvgScore;