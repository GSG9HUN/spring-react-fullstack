import {useEffect, useState} from "react";
import IActor from "../utils/IActor";
import {backendURL} from "../const/urls";
import axios from "axios";

export const useActors = (movieID: number) => {

    const [actors, setActors] = useState<IActor[]>([]);

    useEffect(() => {
        axios.get(`${backendURL}/getActors/${movieID}`).then((response) => {
            setActors(response.data)
        })
    }, [movieID])

    return {actors}
}

export default useActors;