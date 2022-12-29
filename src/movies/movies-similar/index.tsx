import React, { useEffect } from "react";
import styled from "styled-components";
import MoviesCard from "../MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesSimilar } from "../../store/movies/movies-silce";
import { useParams } from "react-router-dom";
import { IState } from "../../constant/interface";
const MoiesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const MoviesSimilar = () => {
  const moviesId = useParams();
  const movies = useSelector((state: IState) => state.movies);
  console.log("movies", movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesSimilar({ type: "similar", id: moviesId.id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesId.id]);
  return (
    <MoiesListWrapper>
      {movies.movies_Similar.length > 0 &&
        movies.movies_Similar.map((item: any) => {
          return <MoviesCard key={item?.id} data={item} />;
        })}
    </MoiesListWrapper>
  );
};
export default MoviesSimilar;
