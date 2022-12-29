import React from "react";
import styled from "styled-components";
const MoiesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const MoviesList = ({ children }: { children: React.ReactNode }) => {
  return <MoiesListWrapper>{children}</MoiesListWrapper>;
};

export default MoviesList;
