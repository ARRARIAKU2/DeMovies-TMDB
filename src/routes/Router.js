import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MoviePage from "../pages/Movies";
import Player from "../pages/Player";
import TVShows from "../pages/TVShow";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" index element={<Home/>} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/player" element={<Player />} />
                <Route path="/tv" element={<TVShows />} />
                <Route path="/movies" element={<MoviePage />} />
                <Route path="/new" element={<Player />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
