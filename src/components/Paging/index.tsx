import React from "react";
import styled from "styled-components";
import { NextIcon, PrevIcon } from "../../assets/icons";
interface IPropPaing {
  total_page: number;
  pageIndex: number;
  handleNextPage: (total_page: number) => void;
  handlePrevPage: () => void;
  handleItemPaging: (index: number) => void;
}
const Paging = ({
  total_page,
  pageIndex = 1,
  handleNextPage,
  handlePrevPage,
  handleItemPaging,
}: IPropPaing) => {
  return (
    <PagingWrapper>
      {!(pageIndex <= 1) && (
        <span
          onClick={() => {
            handlePrevPage();
          }}
        >
          <PrevIcon />
        </span>
      )}
      <div className="paging-wapper">
        {new Array(total_page).fill(0).map((item, index) => {
          return (
            <div style={{ padding: "5px" }} key={index}>
              <span
                onClick={() => {
                  handleItemPaging(index + 1);
                }}
                style={
                  pageIndex === index + 1
                    ? { borderColor: "#FF3D71", color: "#FF3D71" }
                    : {}
                }
                className="paging-item"
              >
                {index + 1}
              </span>
            </div>
          );
        })}
      </div>
      {total_page >= pageIndex + 1 && (
        <span
          onClick={() => {
            handleNextPage(total_page);
          }}
        >
          <NextIcon />
        </span>
      )}
    </PagingWrapper>
  );
};
const PagingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .paging-wapper {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 20px;
    width: 300px;
    overflow-x: scroll;
    padding: 10px;
    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.color.sidebarColor};
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.primary};
      border-radius: 5px;
    }
    &::-webkit-scrollbar-button {
      background: transparent;
    }
  }

  .paging-item {
    padding: 10px 15px;
    color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.white};
    border-radius: 5px;
    cursor: pointer;
  }
  span {
    color: white;
    cursor: pointer;
  }
`;
export default Paging;
