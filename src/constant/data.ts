// import React, { ReactNode } from "react";
// import HomeIcon from "../assets/icons/HomeIcon";
// import {
//   DownloadIcon,
//   LogoutIcon,
//   MoviesIcon,
//   SettingIcon,
//   StarIcon,
//   TimeIcon,
//   TvIcon,
//   UserGroupIcon,
//   UserIcon,
// } from "../assets/icons";
export interface INavlist {
  id: number;
  name: string;
  icon?: JSX.Element;
  to: string;
}
export const LIST_NAV_ONE: INavlist[] = [
  {
    id: 0,
    name: "Home",
    // icon: <HomeIcon />,
    to: "/",
  },
  {
    id: 1,
    name: "Commuity",
    // icon: <UserGroupIcon />,
    to: "/movies",
  },
  {
    id: 2,
    name: "Discover",
    // icon: <UserGroupIcon />,
    to: "/discover",
  },
  {
    id: 3,
    name: "Awards",
    // icon: <UserGroupIcon />,
    to: "/awards",
  },
  {
    id: 4,
    name: "Celebs",
    // icon: <UserIcon />,
    to: "/celebs",
  },
];

export const LIST_LIBARY: INavlist[] = [
  {
    id: 0,
    name: "Recent",
    // icon: <TimeIcon />,
    to: "/",
  },
  {
    id: 1,
    name: "Top Rated",
    // icon: <StarIcon />,
    to: "/",
  },
  {
    id: 2,
    name: "Downloaded",
    // icon: <DownloadIcon />,
    to: "/",
  },
];
export const LIST_CATEGORY: INavlist[] = [
  {
    id: 0,
    name: "TV series",
    // icon: <TvIcon />,
    to: "/",
  },
  {
    id: 1,
    name: "Movies",
    // icon: <MoviesIcon />,
    to: "/",
  },
  {
    id: 2,
    name: "Anime",
    // icon: <MoviesIcon />,
    to: "/",
  },
];
export const LIST_GENNERAL: INavlist[] = [
  {
    id: 0,
    name: "Setting",
    // icon: <SettingIcon />,
    to: "/",
  },
  {
    id: 1,
    name: "Logout",
    // icon: <LogoutIcon />,
    to: "/",
  },
];
