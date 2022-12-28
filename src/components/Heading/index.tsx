import React from "react";
import styled from "styled-components";
const HeadingSiderbar = ({ name }: { name: string }) => {
  return <Heading>{name}</Heading>;
};

const Heading = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  padding: 10px 0px;
`;
export default HeadingSiderbar;
