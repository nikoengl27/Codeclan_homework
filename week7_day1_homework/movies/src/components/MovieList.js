import React from "react";
import Movie from "./Movie";

const MovieList = ({movies}) => {

    const movieNodes = movies.map((movie) => {
    return(
        <Movie key={movie.id}> <a href={movie.url}> {movie.name}</a> </Movie>
        )
    })

return(
    <>
    {movieNodes}
    </>
)

}
export default MovieList;