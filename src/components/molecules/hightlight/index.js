import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css"

const apiKey = "1487e6da2b780246708f52464d6d0f05";
const baseURL = "https://api.themoviedb.org/3";
const imageURL = "https://image.tmdb.org/t/p/w500";

function Highlight() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`).then((res) => {
            setMovie(res.data.results)
        });
    }, []);

    return (
        <div class="bgcolor bg-gradient-to-t from-indigo-950">
            <form>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative mr-12 ml-12">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div class="container">
                {movie.map((movie) => (
                    <div class="box">
                        <div class="imgBx">
                            <img
                                id="gambar"
                                src={`${imageURL}${movie.poster_path}`}
                            />
                        </div>
                        <div class="content">
                            <div>
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    )
}

export default Highlight;