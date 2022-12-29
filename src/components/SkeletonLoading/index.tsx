import React from "react";
import styled from "styled-components";

const LoadingSkeleton = (props: {
  height: string;
  width: string;
  radius: string;
}) => {
  return (
    <Skeleton
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    ></Skeleton>
  );
};
const Skeleton = styled.div`
  background-color: #eee;
  background-image: linear-gradient(
    110deg,
    #ececec 8%,
    #f5f5f5 18%,
    #ececec 33%
  );
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
export default LoadingSkeleton;
