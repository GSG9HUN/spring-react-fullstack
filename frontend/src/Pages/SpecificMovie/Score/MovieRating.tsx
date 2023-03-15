import {Rating} from "@mui/material";
import {useState} from "react";
import {storeScoreToMovie} from "../../../utils/requests"

interface props {
    movieID: number
}

export default function MovieRating({movieID}: props) {

    const [score, setScore] = useState<number>(0)
    const [isSet, setIsSet] = useState<boolean>(false)

    const handleSubmit = (e: any) => {
        if (!e.target.value) {
            return;
        }
        setScore(Number(e.target.value))
        setIsSet(true)
        storeScoreToMovie(movieID, e.target.value).then(() => {

        }).catch(() => console.log("error"))
    }

    return <div>
        <h2>Rate the movie</h2>
        <div className={"rating"}>
            <Rating value={score} disabled={isSet} precision={0.1}
                    onClick={handleSubmit}/>
        </div>
    </div>
}