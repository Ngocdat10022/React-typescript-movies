import React from "react";
import styled from "styled-components";
import Field from "../components/Field";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import IconeysToogle from "../components/icons/IconeysToogle";
import useToogleValue from "../hooks/useToogleValue";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../store/auth/auth-slice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import { useEffect } from "react";
const schema = yup
  .object({
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
const LoginPage = (props: {}) => {
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
  const { user } = useSelector((state: { auth: any }) => state.auth);
  console.log("user", user);
  const handleLogin = (values: {}) => {
    console.log("values", values);
    dispatch(authLogin({ ...values }));
  };
  // const naviagte = useNavigate();
  // const { user } = useSelector((state) => state.auth);
  // console.log(user);
  // useEffect(() => {
  //   if (user || user?.email) {
  //     naviagte("/");
  //   }
  // });
  return (
    <Login>
      <div className="overlay"></div>
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <div className="box">
          <h1 className="title">Login</h1>
          <Field>
            <Label htmlFor="">email</Label>
            <Input
              message={errors?.email?.message}
              control={control}
              type="email"
              name="email"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="">password</Label>
            <Input
              message={errors?.password?.message}
              control={control}
              type={`${isOpen ? "text" : "password"}`}
              name="password"
            >
              <IconeysToogle onClick={handleTogglePassword} isOpen={isOpen} />
            </Input>
          </Field>
          <div className="btn">
            <Button isBold={true}>Login</Button>
          </div>
          <span className="link">
            <Link to="/register">Register</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </Login>
  );
};
LoginPage.propTypes = {};
const Login = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./background2.jpg");
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
    height: 500px;
    border-radius: 5px;
    background: ${(props) => props.theme.color.mainColor};
    overflow: hidden;
    animation: height 0.7s linear forwards;
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
      height: 550px;
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
export default LoginPage;
