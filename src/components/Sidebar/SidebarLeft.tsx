import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import { Link, NavLink } from "react-router-dom";
import {
  LIST_NAV_ONE,
  INavlist,
  LIST_LIBARY,
  LIST_CATEGORY,
  LIST_GENNERAL,
} from "../../constant/data";
import TitleSidebar from "./TitleSidebar";
// import { useDispatch } from "react-redux";
// import { authLogout } from "~/Store/auth/auth-slice";

const SidebarLeft = (props: {}) => {
  // const dispatch = useDispatch();
  return (
    <WrappersidebarLeft>
      <Heading name="Watch" />
      <div className="nav">
        <TitleSidebar title="Menu" marginTop="" />
        <ul className="nav_list">
          {LIST_NAV_ONE.length > 0 &&
            LIST_NAV_ONE.map((item: INavlist, index) => {
              return (
                <NavLink to={item.to} key={item.id} className={`nav_link `}>
                  <span>{item.id}</span>
                  <li>{item.name}</li>
                </NavLink>
              );
            })}
        </ul>
        <TitleSidebar title="Libary" marginTop="30px" />
        <ul className="nav_list">
          {LIST_LIBARY.length > 0 &&
            LIST_LIBARY.map((item: INavlist, index) => {
              return (
                <Link to={item.to} key={item.id} className={`nav_link`}>
                  <span>{item.id}</span>
                  <li>{item.name}</li>
                </Link>
              );
            })}
        </ul>
        <TitleSidebar title="Category" marginTop="30px" />
        <ul className="nav_list">
          {LIST_CATEGORY.length > 0 &&
            LIST_CATEGORY.map((item: INavlist, index) => {
              return (
                <Link to={item.to} key={item.id} className={`nav_Link`}>
                  <span>{item.icon}</span>
                  <li>{item.name}</li>
                </Link>
              );
            })}
        </ul>
        <TitleSidebar title="General" marginTop="30px" />
        <ul className="nav_list">
          {LIST_GENNERAL.length > 0 &&
            LIST_GENNERAL.map((item: INavlist, index) => {
              return (
                <Link
                  onClick={() => {
                    if (item.id === 1) {
                      console.log("logout Success");
                      // dispatch(authLogout());
                    }
                  }}
                  to={item.to}
                  key={item.id}
                  className={`nav_link `}
                >
                  <span>{item.id}</span>
                  <li>{item.name}</li>
                </Link>
              );
            })}
        </ul>
      </div>
    </WrappersidebarLeft>
  );
};
const WrappersidebarLeft = styled.div`
  width: ${(props) => props.theme.width.sideBarLeft};
  height: 100vh;
  background-color: ${(props) => props.theme.color.sidebarColor};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 20px 0px 40px 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.sidebarColor};
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.sidebarColor};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-button {
    background: ${(props) => props.theme.color.sidebarColor};
  }
  .nav {
    margin-top: 70px;
    &_list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 20px 0px 0px 10px;
    }
    &_link {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: bold;
      color: ${(props) => props.theme.color.white};
      &.active {
        color: ${(props) => props.theme.color.primary};
      }
    }
  }
  .width {
    width: 20px;
  }
`;
export default SidebarLeft;
