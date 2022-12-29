import React, { useEffect } from "react";
import "swiper/css";
import MoviesCard from "../MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesTopRated } from "../../store/movies/movies-silce";
import MoviesList from "../MoviesList";
import { IState } from "../../constant/interface";
const MoviesTopRated = ({ type }: { type: string }) => {
  const movies = useSelector((state: IState) => state.movies);
  console.log("movies", movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesTopRated({ type: type, page: 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesList>
      {movies.movies_Top_Rated.length > 0 &&
        movies.movies_Top_Rated.map((item: any) => {
          return <MoviesCard key={item.id} data={item} />;
        })}
    </MoviesList>
  );
};
export default MoviesTopRated;
