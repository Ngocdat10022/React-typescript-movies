import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
const TagList = () => {
  return (
    <ListTag>
      <Tag>Action</Tag>
      <Tag>Action</Tag>
      <Tag>Action</Tag>
    </ListTag>
  );
};
const ListTag = styled.div`
  display: flex;
  gap: 5px;
`;

export default TagList;
