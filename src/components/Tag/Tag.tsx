import React from "react";
import styled from "styled-components";
const Tag = ({ children }: { children: string }) => {
  return <WrapperTag>{children}</WrapperTag>;
};
const WrapperTag = styled.span`
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px 8px;
  font-size: 8px;
  color: ${(props) => props.theme.color.white};
`;

export default Tag;
