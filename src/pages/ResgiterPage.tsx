import React, { useEffect } from "react";
import styled from "styled-components";
import Field from "../components/Field";
import Label from "../components/Label";
import Input from "../components/Input";
import useToogleValue from "../hooks/useToogleValue";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconeysToogle from "../components/icons/IconeysToogle";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { authResgiter } from "../store/auth/auth-slice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IState } from "../constant/interface";

const schema = yup
  .object({
    name: yup.string().required("Name is a required field"),
    email: yup.string().required(),
    password: yup
      .string()
      .required("password is a required field")
      .min(8, "Password must be 8 charater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  })
  .required();
const ResgiterPage = () => {
  const { value: isOpen, handleToogleValue: handleTogglePassword } =
    useToogleValue(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleLogin = (values: {}): void => {
    console.log(values);
    dispatch(
      authResgiter({
        ...values,
      })
    );
  };
  const { user } = useSelector((state: IState) => state.auth);
  console.log("user", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);
  return (
    <Resgiter>
      <div className="overlay"></div>
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <div className="box">
          <h1 className="title">Resgiter</h1>
          <Field>
            <Label htmlFor="">Username</Label>
            <Input
              message={errors?.name?.message}
              control={control}
              type="text"
              name="name"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="">Email</Label>
            <Input
              message={errors?.email?.message}
              control={control}
              type="email"
              name="email"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="">Password</Label>
            <Input
              control={control}
              name="password"
              type={isOpen ? "text" : "password"}
              message={errors?.password?.message}
            >
              <IconeysToogle onClick={handleTogglePassword} isOpen={isOpen} />
            </Input>
          </Field>
          <div className="btn">
            <Button isBold={true}>Resgiter</Button>
          </div>
          <span className="link">
            <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </Resgiter>
  );
};
const Resgiter = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./background1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    background: rgba(30, 31, 30, 0.8);
    position: absolute;
    inset: 0;
  }
  .form {
    position: relative;
    z-index: 100;
    width: 400px;
    height: 600px;
    border-radius: 5px;
    background: ${(props) => props.theme.color.mainColor};
    overflow: hidden;
    animation: height 0.5s linear forwards;
  }
  .form::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 500px;
    top: -50%;
    left: -50%;
    background: linear-gradient(0deg, transparent, #ff3d71, #ff3d71);
    transform-origin: bottom right;
    animation: animate 4s linear infinite;
  }
  .form::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 500px;
    top: -50%;
    left: -50%;
    background: linear-gradient(0deg, transparent, #ff3d71, #ff3d71);
    transform-origin: bottom right;
    animation: animate 4s linear infinite;
    animation-delay: -2s;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes height {
    0% {
      height: 0;
    }
    100% {
      height: 600px;
    }
  }
  .box {
    position: absolute;
    background: ${(props) => props.theme.color.mainColor};
    inset: 2px;
    z-index: 10;
    padding: 20px 20px;
    .title {
      color: ${(props) => props.theme.color.primary};
      text-align: center;
      letter-spacing: 5px;
      font-size: 40px;
      text-shadow: 12px 7px 10px ${(props) => props.theme.color.primary};
      font-weight: bold;
    }
    .link {
      display: block;
      width: 100%;
      text-align: center;
      a {
        margin-top: 10px;
        font-size: 14px;
        color: ${(props) => props.theme.color.primary};
      }
    }
  }
`;
export default ResgiterPage;
