import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
interface IInput {
  name: string;
  control: any;
  message?: any;
  children?: React.ReactNode;
  type: string;
}
// type Connect<Type> = {
//   [Property in keyof Type]+?: Type[Property];
// };
// type ConnectNoRequired = Connect<IInput>;
const Input = ({
  name = "",
  control,
  message = "",
  type = "",
  children,
}: IInput) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <WrapperInput>
      <input type={type} className="input" {...field} />
      {children}
      {message && <span className="error">{message}</span>}
    </WrapperInput>
  );
};
const WrapperInput = styled.div`
  position: relative;
  .input {
    width: 100%;
    border-radius: 10px;
    border-radius: 2px 2px 2px 2px inset ${(props) => props.theme.color.primary};
    padding: 20px;
    color: ${(props) => props.theme.color.primary};
    font-size: 18px;
    /* background: ${(props) => props.theme.color.mainColor}; */
    inset: 3px 8px 22px -2px ${(props) => props.theme.color.primary};
    background: rgba(225, 227, 226, 0.2);
    :focus-within {
      border: 2px solid ${(props) => props.theme.color.primary};
    }
  }
  .error {
    font-size: 14px;
    color: ${(props) => props.theme.color.error};
  }
`;

export default Input;
