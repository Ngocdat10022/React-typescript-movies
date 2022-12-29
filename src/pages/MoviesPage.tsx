import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { SearchIcon } from "../assets/icons";
import { MoviesCard } from "../movies";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesSearch, setQuerySearch } from "../store/movies/movies-silce";
import { CartLoadingSkeleton } from "../movies/MoviesCard";
import Paging from "../components/Paging";
import { usePaging } from "../hooks/usePaging";
import { IState } from "../constant/interface";

const MoviesPage = () => {
  const { pageIndex, handleNextPage, handlePrevPage, handleItemPaging } =
    usePaging();
  console.log("pageIndex", pageIndex);
  const dispatch = useDispatch();
  const movies = useSelector((state: IState) => state.movies);
  console.log(movies);
  const totalPage = movies.total_page;
  useEffect(() => {
    dispatch(getMoviesSearch({ query: movies.querySearch, page: pageIndex }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);
  const handleQuerySearch = (e: any) => {
    dispatch(setQuerySearch({ query: e.target.value }));
  };
  return (
    <MoviesP>
      <Header />
      <div className="movies-page">
        <div className="movies-page__search">
          <input placeholder="Search" onChange={handleQuerySearch} />
          <div
            className="btn-search"
            onClick={() => {
              dispatch(getMoviesSearch({ query: movies.querySearch }));
            }}
          >
            <SearchIcon className="width" />
          </div>
        </div>
        {movies.loading && (
          <div className="movies-page__movies">
            {movies.movies_Search.length === 0 && (
              <>
                {/* {new Array(20).fill().map((item, index) => {
                  return <CartLoadingSkeleton key={index} />;
                })} */}
              </>
            )}
            {movies.movies_Search.length > 0 &&
              movies.movies_Search.map((item: any) => {
                return <CartLoadingSkeleton key={item.id} />;
              })}
          </div>
        )}
        <div className="movies-page__movies">
          {!movies.loading &&
            movies.movies_Search.length > 0 &&
            movies.movies_Search.map((item: any) => {
              return <MoviesCard key={item.id} data={item} />;
            })}
        </div>

        {!!movies.movies_Search && (
          <div style={{ padding: "50px 0px" }}>
            <Paging
              total_page={totalPage}
              pageIndex={pageIndex}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              handleItemPaging={handleItemPaging}
            />
          </div>
        )}
      </div>
    </MoviesP>
  );
};
const MoviesP = styled.div`
  flex: 1;
  background: ${(props) => props.theme.color.mainColor};
  padding: 20px 20px 0px 20px;
  margin-right: 400px;
  .movies-page {
    &__search {
      width: 400px;
      background: #fff;
      margin: auto;
      border-radius: 10px;
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      background: rgba(92, 92, 92, 0.9);
      input {
        width: 100%;
        padding: 15px;
        border-radius: 10px;
        background: transparent;
        transition: all 0.5s;
        color: ${(props) => props.theme.color.white};
        &:focus {
          border: 2px solid ${(props) => props.theme.color.primary};
          box-shadow: rgba(255, 61, 113, 0.15) 10px 10px 2.6px;
        }
      }
      .btn-search {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: ${(props) => props.theme.color.white};
        cursor: pointer;
      }
    }
    &__movies {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-top: 40px;
    }
  }
  .loading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: bblFadInOut 1.8s infinite ease-in-out;
  }
  .loader {
    color: #fff;
    font-size: 7px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }

  @keyframes bblFadInOut {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
export default MoviesPage;
