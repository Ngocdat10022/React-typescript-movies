import React from "react";
import Button from "../Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import tmdbMovies from "../../constant/apiGetMovies";

const BannerItem = ({ data }: { data: any }) => {
  const { id } = data;
  const navigate = useNavigate();
  return (
    <Item>
      <div className="banner__img">
        <img src={tmdbMovies.Image500(`${data?.poster_path}`)} alt="slide" />
      </div>
      <div className="banner__content">
        <h3 className="banner__heading">{data?.title}</h3>
        <div className="banner__tag">
          <span>Action</span>
          <span>Acventure</span>
          <span>Drama</span>
        </div>
        <div className="banner__btn">
          <Button
            width="200px"
            children="Watch"
            isBold={true}
            // onClick={() => {
            //   navigate(`movies-details/${id}`);
            // }}
          />
          <div className="banner__plus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Item>
  );
};

const Item = styled.div`
  .banner__img {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .banner__content {
    position: absolute;
    left: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .banner__heading {
      font-size: 30px;
      color: ${(props) => props.theme.color.white};
      font-weight: bold;
    }
    .banner__tag {
      display: flex;
      align-items: center;
      gap: 20px;
      span {
        padding: 5px 10px;
        background: transparent;
        color: ${(props) => props.theme.color.white};
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
    .banner__btn {
      display: flex;
      align-items: center;
      gap: 20px;
      .banner__plus {
        width: 40px;
        height: 40px;
        color: ${(props) => props.theme.color.white};
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
`;
export default BannerItem;
