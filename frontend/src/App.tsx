import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieCard/MovieList";
import IMovie from "./utils/Movie";

function App() {


    const [movies, setMovies] = useState<IMovie[]>([{title: "Cím", poster_path: "valami_url", overview: "hosszú leírás"}, {title: "Cím", poster_path: "valami_url", overview: "hosszú leírás"}, {title: "Cím",poster_path: "valami_url", overview: "hosszú leírás"}])


    useEffect(() => {

    }, [])


    return (
        <div className="App">
            <Header></Header>
            <MovieList movies={movies}/>
        </div>
    );
}

export default App;
