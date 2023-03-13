import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MovieList from "./Pages/home/MovieCard/MovieList";
import {Route, Routes} from "react-router-dom";
import SpecificMovie from "./Pages/home/specificMovie/SpecificMovie";

function App() {

    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path={"/"} element={<MovieList/>}/>
                <Route path={"/movie/:id"} element={<SpecificMovie/>}/>
            </Routes>
        </div>
    );
}

export default App;
