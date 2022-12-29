import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IState } from "../../constant/interface";
import { getMoviesCredits } from "../../store/movies/movies-silce";
const MoviesCredits = () => {
  const moviesId = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state: IState) => state.movies);
  useEffect(() => {
    dispatch(getMoviesCredits({ type: "credits", id: moviesId.id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesId.id]);
  const data = movies.movies_Credits;
  return (
    <WrapperCredits>
      {data.map((item: any) => {
        return (
          <div key={item?.id} className="credits-item">
            <img
              alt=""
              src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
            />
            <h3 className="credits-name">{item?.name}</h3>
          </div>
        );
      })}
    </WrapperCredits>
  );
};
const WrapperCredits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  .credits-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .credits-name {
      text-align: center;
      padding: 20px;
      color: ${(props) => props.theme.color.white};
      font-size: 15px;
      letter-spacing: 5px;
    }
  }
`;
export default MoviesCredits;
