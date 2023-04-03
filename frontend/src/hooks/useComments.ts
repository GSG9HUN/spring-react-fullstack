import {useEffect, useState} from "react";
import {backendURL} from "../const/urls";
import axios from "axios";
import IComment from "../utils/IComment";

export const useComments = (movieID: number) => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        axios.get(`${backendURL}/comment/${movieID}`).then((response) => {
            setComments(response.data)
        })
    }, [movieID])

    return comments
}

export default useComments;