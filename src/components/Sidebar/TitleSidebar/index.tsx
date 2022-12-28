import React from "react";
import styled from "styled-components";
interface ITitle {
  title: string;
  marginTop: string;
}
const TitleSidebar = ({ title, marginTop }: ITitle) => {
  return <Title marginTop={marginTop}>{title}</Title>;
};
const Title = styled.h5`
  letter-spacing: 5px;
  color: ${(props) => props.theme.color.titlesidebar};
  margin-top: ${(props: { marginTop: string }) => props.marginTop};
`;

export default TitleSidebar;
