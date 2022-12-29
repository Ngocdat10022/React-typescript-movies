import React, { useEffect } from "react";
import "swiper/css";
import MoviesCard, { CartLoadingSkeleton } from "../MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesNowPlaying } from "../../store/movies/movies-silce";
import { usePaging } from "../../hooks/usePaging";
import MoviesList from "../MoviesList";
import { IState } from "../../constant/interface";
const MoviesNowPlaying = ({ type }: { type: string }) => {
  const { pageIndex } = usePaging();
  const { movies_Now_Playing, loading } = useSelector(
    (state: IState) => state.movies
  );
  console.log("loading", loading);
  console.log("movies_Now_Playing", movies_Now_Playing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesNowPlaying({ type: type, page: pageIndex }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesList>
      {loading && (
        <>
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
        </>
      )}
      {!loading &&
        movies_Now_Playing.length > 0 &&
        movies_Now_Playing.map((item: any) => {
          return <MoviesCard key={item.id} data={item} />;
        })}
    </MoviesList>
  );
};
export default MoviesNowPlaying;
