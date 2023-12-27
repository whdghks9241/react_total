import React, {useState, useEffect} from "react";

import MovieCard from "./MovieCard";
import axios from 'axios';

const MovieList = () => {

    const [movies, setMovies] = useState([]);

    // 외부에서 API를 통해 영화데이터를 가지고오고 내가 원하는 내용만 보여주고 싶은경우 
    // then에 내가 원하는 내용만 가져올 수 있도록 요청
    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json')
        .then(response => {
            // 가져온 데이터중 필요한 정보만 가져온다.
            const movieData = response.data.data.movies.map(movie => ({
                id : movie.id,
                title : movie.title,
                reting : movie.rating,
                poster : movie.medium_cover_image
            }));
            setMovies(movieData);
        })
        .catch( error=> {
            console.log('데이터 없음', error)
        });
      
    }, []);

    return (
        <div>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )

}

export default MovieList;