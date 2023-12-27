import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieList from './MovieList';
import PostAPI from './PostAPI';
import DogInfo from './DogInfo';
import Joke from './joke';
import User from './user';
import PostComment from './PostComment';
import MovieListCarousel from './MovieListCarousel';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MovieList /> */}
    {/* <PostAPI /> */}
    {/* <DogInfo /> */}
    {/* <Joke /> */}
    {/* <User /> */}
    {/* <PostComment /> */}
    <MovieListCarousel />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
