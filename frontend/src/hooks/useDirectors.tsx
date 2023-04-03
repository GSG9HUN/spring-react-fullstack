import {useEffect, useState} from "react";
import {backendURL} from "../const/urls";
import axios from "axios";
import IDirector from "../utils/IDirector";

export const useDirectors = (movieID: number) => {

    const [directors, setDirectors] = useState<IDirector[]>([]);

    useEffect(() => {
        axios.get(`${backendURL}/getDirectors/${movieID}`).then((response) => {
            setDirectors(response.data)
        })
    }, [movieID])

    return {directors}
}

export default useDirectors;