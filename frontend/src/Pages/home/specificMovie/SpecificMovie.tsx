import {useParams} from "react-router-dom";
import React from "react";

export default function SpecificMovie() {
    const {id} = useParams();


    //ide kell majd poszert imdb link comment avg score és stb
    return <h2>{id}</h2>
}