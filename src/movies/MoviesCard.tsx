import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StarIcon } from "../assets/icons";
import LoadingSkeleton from "../components/SkeletonLoading";
import Button from "../components/Button";
import Plus from "../components/Plus";
import TitleCard from "../components/TitleCard";
import tmdbMovies from "../constant/apiGetMovies";
import { IData } from "../constant/interface";

const MoviesCard = ({ data }: { data: IData }) => {
  const { id } = data;
  const navigate = useNavigate();
  return (
    <MoviesCardWarapper>
      <div className="card__img">
        <img src={`${tmdbMovies.Image500(data?.poster_path)}`} alt="kkjh" />
        <img
          className="img-blur"
          src={`${tmdbMovies.Image500(data?.poster_path)}`}
          alt="kkjh"
        />
      </div>
      <div className="card__content">
        <TitleCard children={data?.original_title} />
        <div className="card__star">
          <span>{data?.release_date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {data?.vote_average} <StarIcon className="color" />
          </span>
        </div>
      </div>
      <div className="card__btn">
        <Button
          children="Watch"
          onClick={() => {
            navigate(`/movies-details/${id}`);
          }}
        />
      </div>
      <div className="card__plus">
        <Plus height="30px" width="30px" />
      </div>
    </MoviesCardWarapper>
  );
};
export const CartLoadingSkeleton = () => {
  return (
    <MoviesCardWarapper>
      <div className="card__img">
        <LoadingSkeleton width="100%" height="300px" radius="10px" />
      </div>
      <div className="card__content">
        <LoadingSkeleton width="100%" height="20px" radius="5px" />
        <div className="card__star">
          <LoadingSkeleton width="80px" height="10px" radius="2px" />
          <LoadingSkeleton width="60px" height="10px" radius="2px" />
        </div>
      </div>
      <div className="card__btn">
        <LoadingSkeleton width="100%" height="50px" radius="10px" />
      </div>
      {/* <div className="card__plus">
        <Plus height="30px" width="30px" />
      </div> */}
    </MoviesCardWarapper>
  );
};
const MoviesCardWarapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  padding: 12px;
  border-radius: 10px;
  background: rgba(158, 158, 158, 0.1);
  position: relative;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .img-blur {
    position: absolute;
    top: 10px;
    right: 0;
    padding: 12px;
    border-radius: 40%;
    filter: blur(40px);
    z-index: -1;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }
  .card__star {
    display: flex;
    align-items: center;
    font-size: 10px;
    justify-content: space-between;
    color: ${(props) => props.theme.color.white};
    span {
      .color {
        color: #ffaa01;
      }
    }
  }
  .card__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .card__plus {
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;
export default MoviesCard;
