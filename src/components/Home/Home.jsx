import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from '../MovieListing/MovieListing';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../reducers/movies/movieSlice";


const Home = () => {
  const dispatch = useDispatch();
 
  const movie='Harry';
  const shows='friends';
  useEffect( () => {

    dispatch(fetchAsyncMovies(movie));
    dispatch(fetchAsyncShows(shows));
  },[dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;