import React from "react";
import MyPage from "src/page/MyPage";
import MyRecord from "src/page/MyRecord";
import Column from "src/page/Column";
import { Navigate } from "react-router-dom";
export const routes = [
  {
    path: "/arent",
    exact: true,
    element: <Navigate to="/homepage" />,
  },
  {
    path: "/homepage",
    exact: true,
    element: <MyPage />,
  },
  {
    path: "/my-record",
    exact: true,
    element: <MyRecord />,
  },
  {
    path: "/column",
    exact: true,
    element: <Column />,
  },
];
