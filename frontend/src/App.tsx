import React from 'react';
import './App.css';
import MovieList from "./Pages/home/MovieCard/MovieList";
import {Route, Routes} from "react-router-dom";
import SpecificMovie from "./Pages/SpecificMovie/SpecificMovie";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<MovieList/>}/>
                <Route path={"/movie/:id"} element={<SpecificMovie/>}/>
            </Routes>
        </div>
    );
}

export default App;
