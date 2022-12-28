import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
interface IButton {
  type?: "submit" | "button";
  children: string | React.ReactNode;
  width?: string;
  height?: string;
  loading?: boolean;
  isBold?: boolean;
  onClick?: () => void;
}
const Button = ({
  type,
  children,
  width,
  height,
  loading = false,
  isBold,
  onClick = () => {},
}: IButton) => {
  const child = loading ? <div className="arc"></div> : children;
  return (
    <WrapperButton
      width={width}
      isBold={isBold}
      onClick={onClick}
      height={height}
      type={type}
    >
      {child}
    </WrapperButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string,
  isBold: PropTypes.bool,
};
const WrapperButton = styled.button`
  border-radius: 5px;
  width: ${(props: IButton) => (props.width ? `${props.width}` : `100%`)};
  height: ${(props: IButton) => (props.height ? `${props.height}` : `50px`)};
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
  font-weight: ${(props) => (props.isBold ? "bold" : "1")};
  .arc:before {
    -webkit-animation: spin 0.5s infinite linear;
    animation: spin 0.5s infinite linear;
    border-radius: 100%;
    border-top: 6px solid var(--primary, #fff);
    margin: auto;
    content: "";
    display: block;
    height: 40px;
    width: 40px;
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
export default Button;
