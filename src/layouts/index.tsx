import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SidebarLeft, SidebarRight } from "../components/Sidebar";

const Layout = () => {
  return (
    <WrapperLayout>
      <div className="sidebar-left">
        <SidebarLeft />
      </div>
      {/* <div className="main"></div> */}
      <Outlet></Outlet>
      <div className="sidebar-rigth">
        <SidebarRight />
      </div>
    </WrapperLayout>
  );
};
const WrapperLayout = styled.div`
  width: 100%;
  display: flex;
  .sidebar-left {
    width: ${(props) => props.theme.width.sideBarLeft};
    height: 100vh;
  }
  .sidebar-right {
    width: ${(props) => props.theme.width.sideBarright};
    height: 100vh;
  }
`;
export default Layout;
