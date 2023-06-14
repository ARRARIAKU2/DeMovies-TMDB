import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Bgimage(props) {
    const navigate = useNavigate();
    return(
        <>
            <div className="relative">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8579/1498579-h-4dfb0de0e149" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80">
                        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Discover Your Favourites Movie and More</h1>
                    </div>
                    <div className="absolute text-5xl text-white top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button onClick={() => navigate(props.login ? "/login" : "/signup")} type="button" className="text-3xl text-white bg-gradient-to-r from-blue-500 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <span className="text-2xl">Get Started</span>
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Bgimage;