import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { Banner } from "../components/Banner";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import MoviesNowPlaying from "../movies/movies-nowplaying";
import MoviesTopRated from "../movies/movies-top-rated";
import { IState } from "../constant/interface";

const Home = () => {
  const { user } = useSelector((state: IState) => state.auth);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.email) {
      navigate("/login");
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Main>
      <Header />
      <Banner type="popular" />
      <Heading name="Now Playing" />
      <MoviesNowPlaying type="now_playing" />
      <Heading name="Top Rated Movies" />
      <MoviesTopRated type="top_rated" />
    </Main>
  );
};
const Main = styled.div`
  flex: 1;
  margin-right: 400px;
  background: ${(props) => props.theme.color.mainColor};
  padding: 20px 20px 0px 20px;
`;
export default Home;
