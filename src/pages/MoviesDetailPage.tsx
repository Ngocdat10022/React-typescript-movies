import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMoviesDetails } from "../store/movies/movies-silce";
import tmdbMovies from "../constant/apiGetMovies";
import MoviesCredits from "../movies/movies-credits";
import MoviesTrailer from "../movies/movies-trailer";
import MoviesSimilar from "../movies/movies-similar";
import { IState } from "../constant/interface";

const MoviesDetailPage = () => {
  const moviesId = useParams();
  console.log(moviesId.id);
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies);
  const genres = movies?.movies_Details?.genres;
  useEffect(() => {
    dispatch(getMoviesDetails({ id: moviesId.id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesId.id]);
  // if (!genres) return;
  return (
    <DetailsPage>
      <Header />
      <div className="movies-details">
        <div className="movies-details__banner">
          <div className="banner-item">
            <div className="overlay"></div>
            <img
              className="banner-item"
              src={`${tmdbMovies.Image500(
                movies?.movies_Details?.backdrop_path
              )}`}
              alt="banner"
            />
          </div>
          <div className="banner-child">
            <img
              src={`${tmdbMovies.Image500(
                movies?.movies_Details?.poster_path
              )}`}
              alt="banner"
            />
          </div>
        </div>
        <div className="movies-details__title">
          <h3>{movies?.movies_Details?.original_title} </h3>
        </div>
        <div className="movies-details__geners">
          {genres?.length > 0 &&
            genres?.map((item: any) => {
              return (
                <span key={item.id} className="geners-item">
                  {item.name}
                </span>
              );
            })}
        </div>
        <div className="movies-details__des">
          <p>{movies?.movies_Details?.overview}</p>
        </div>
        <h3 className="movies-details__heading">Casts</h3>
        <MoviesCredits />
        <h3 className="movies-details__heading">Trailer</h3>
        <MoviesTrailer />
        <Heading name="Movies Similar" />
        <MoviesSimilar />
      </div>
    </DetailsPage>
  );
};

const DetailsPage = styled.div`
  padding: 0 20px;
  flex: 1;
  margin-right: 400px;
  .movies-details {
    margin-top: 50px;
    &__banner {
      width: 100%;
      .banner-item {
        position: relative;
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }
      }
      .banner-child {
        width: 500px;
        position: relative;
        margin: -150px auto 0px auto;
        z-index: 100;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    &__title {
      padding: 120px 20px 20px 20px;
      text-align: center;
      font-size: 20px;
      color: ${(props) => props.theme.color.white};
    }
    &__geners {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      gap: 20px;
      .geners-item {
        padding: 8px 18px;
        background: transparent;
        border: 2px solid ${(props) => props.theme.color.white};
        color: ${(props) => props.theme.color.white};
        border-radius: 10px;
        font-size: 18px;
      }
    }
    &__des {
      padding: 30px;
      text-align: center;
      color: ${(props) => props.theme.color.white};
      p::first-letter {
        font-size: 200%;
      }
      p {
        line-height: 40px;
        font-size: 15px;
      }
    }
    &__heading {
      font-size: 40px;
      text-align: center;
      padding: 50px 0;
      color: ${(props) => props.theme.color.white};
    }
  }
`;
export default MoviesDetailPage;
