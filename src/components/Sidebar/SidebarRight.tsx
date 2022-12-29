import React, { useEffect } from "react";
import styled from "styled-components";
import { SearchIcon, StarIcon } from "../../assets/icons";
import Heading from "../Heading";
import Button from "../Button";
import TagList from "../Tag/TagList";
import TitleCard from "../TitleCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getMoviesPopular,
  getMoviesTopRated,
} from "../../store/movies/movies-silce";
import { useNavigate } from "react-router-dom";
import { setIndex } from "../../constant/globalFunc";
import tmdbMovies from "../../constant/apiGetMovies";
import { IData, IState } from "../../constant/interface";
const SidebarRight = () => {
  const navigate = useNavigate();
  const { movies_Popular, movies_Top_Rated } = useSelector(
    (state: IState) => state.movies
  );
  const { index: indexPopular, handleSetIndex: handleSetIndexPopular } =
    setIndex();
  const { index: indexTopReted, handleSetIndex: handleSetIndexTopReted } =
    setIndex();
  const dataPopular = movies_Popular;
  const dataTopReted = movies_Top_Rated;
  const dataSlice = {
    dataPopularSlice: dataPopular.slice(0, indexPopular),
    dataTopRetedSlice: dataTopReted.slice(0, indexTopReted),
  };
  console.log("dataSlice", dataSlice.dataPopularSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesPopular({ type: "popular" }));
    if (dataTopReted.length <= 0) {
      dispatch(getMoviesTopRated({ type: "top_rated" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <WrappersidebarRight>
      <div className="wrapper-input">
        <input placeholder="Quick Search" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="sidebar-content">
        <Heading name="Poppular Movies" />
        <div className="siderbar-content_card">
          {dataSlice.dataPopularSlice.length > 0 &&
            dataSlice.dataPopularSlice.map((item: any) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => {
                    navigate(`/movies-details/${item.id}`);
                  }}
                >
                  <div className="card__img">
                    <img
                      src={`${tmdbMovies.Image500(item?.poster_path)}`}
                      alt="spiderman"
                    />
                  </div>
                  <div className="card__content">
                    <TitleCard children={item?.title} />
                    <div className="card__star">
                      <span>{item?.release_date}</span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        {item?.vote_average} <StarIcon className="color" />
                      </span>
                    </div>
                    <TagList></TagList>
                  </div>
                </div>
              );
            })}
          {/* <div
            className="card"
            // onClick={() => {
            //   navigate(`/movies-details/${item.id}`);
            // }}
          >
            <div className="card__img">
              <img
                src={`https://4.bp.blogspot.com/-m7qzhWsqRAY/XLSQM2nZ7nI/AAAAAAAAM_4/mPq4c-7UBkEpBMX-FAcgnVGP6TBlAWy_ACLcBGAs/s2560/marvel-spiderman-new-4k-6b-2048x2048.jpg`}
                alt="spiderman"
              />
            </div>
            <div className="card__content">
              <TitleCard children={`Spiderman`} />
              <div className="card__star">
                <span>{`2017`}</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {`9`} <StarIcon className="color" />
                </span>
              </div>
              <TagList></TagList>
            </div>
          </div> */}
        </div>
        <Button
          children="See more"
          isBold={false}
          type="button"
          onClick={() => {
            handleSetIndexPopular(dataSlice.dataPopularSlice.length);
          }}
          // onClick={() => {}}
        />
      </div>
      <div className="sidebar-content">
        <Heading name=" Movies" />
        <div className="siderbar-content_card">
          {dataSlice.dataTopRetedSlice.length > 0 &&
            dataSlice.dataTopRetedSlice.map((item: any) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => {
                    navigate(`/movies-details/${item.id}`);
                  }}
                >
                  <div className="card__img">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                      alt="spiderman"
                    />
                  </div>
                  <div className="card__content">
                    <TitleCard children={item?.title} />
                    <div className="card__star">
                      <span>{item?.release_date}</span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        {item?.vote_average} <StarIcon className="color" />
                      </span>
                    </div>
                    <TagList></TagList>
                  </div>
                </div>
              );
            })}
          {/* <div
            className="card"
            // onClick={() => {
            //   navigate(`/movies-details/${item.id}`);
            // }}
          >
            <div className="card__img">
              <img
                src={`https://4.bp.blogspot.com/-m7qzhWsqRAY/XLSQM2nZ7nI/AAAAAAAAM_4/mPq4c-7UBkEpBMX-FAcgnVGP6TBlAWy_ACLcBGAs/s2560/marvel-spiderman-new-4k-6b-2048x2048.jpg`}
                alt="spiderman"
              />
            </div>
            <div className="card__content">
              <TitleCard children={`Spiderman`} />
              <div className="card__star">
                <span>{`2019`}</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {`8`} <StarIcon className="color" />
                </span>
              </div>
              <TagList></TagList>
            </div>
          </div> */}
        </div>
        <Button
          children="See more"
          isBold={false}
          onClick={() => {
            handleSetIndexTopReted(dataSlice.dataTopRetedSlice.length);
          }}
        />
      </div>
    </WrappersidebarRight>
  );
};
const WrappersidebarRight = styled.div`
  background-color: ${(props) => props.theme.color.sidebarColor};
  width: ${(props) => props.theme.width.sideBarright};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  padding: 30px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.sidebarColor};
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.sidebarColor};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-button {
    background: ${(props) => props.theme.color.sidebarColor};
  }
  .wrapper-input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgba(200, 201, 204, 0.5);
    position: relative;
    margin-bottom: 30px;
    input {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: transparent;
      padding: 10px;
      color: ${(props) => props.theme.color.white};
    }
    .search-icon {
      position: absolute;
      right: 10px;
      width: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(200, 201, 204, 0.5);
    }
  }
  .siderbar-content {
    &_card {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 400px;
      overflow-y: scroll;
      margin-bottom: 20px;
      /* border-radius: 10px; */
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: ${(props) => props.theme.color.sidebarColor};
      }
      &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.color.primary};
        border-radius: 5px;
      }
      &::-webkit-scrollbar-button {
        background: ${(props) => props.theme.color.sidebarColor};
      }
      .card {
        width: 100%;
        height: auto;
        background-color: ${(props) => props.theme.color.bgCard};
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        cursor: pointer;
        &__img {
          width: 30%;
          img {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
        }
        &__content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
          width: 70%;
        }
        &__star {
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
      }
    }
  }
`;
export default SidebarRight;
