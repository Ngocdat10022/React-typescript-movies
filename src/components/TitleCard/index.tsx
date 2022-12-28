import React from "react";
import styled from "styled-components";
const TitleCard = ({ children }: { children: string }) => {
  return <H3 className="card__title">{children}</H3>;
};
const H3 = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-size: 15px;
  letter-spacing: 2px;
`;

export default TitleCard;
