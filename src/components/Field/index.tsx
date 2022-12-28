import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Field = ({ children }: { children: React.ReactNode }) => {
  return <WrapperField>{children}</WrapperField>;
};

Field.propTypes = {
  children: PropTypes.node,
};
const WrapperField = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export default Field;
