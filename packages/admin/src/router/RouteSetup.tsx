import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import React from "react";

import AdminLayout from "../component/layout/AdminLayout";
import AdminLogin from "../component/login/AdminLogin";
import BaseRoute from "./BaseRoute";

const router = createBrowserRouter([
  // 루트("/") 및 로그인 관련 경로
  {
    path: "/",
    element: <Navigate to="/admin/login" replace />, // "/" → "/admin/login"
  },
  {
    path: "/admin/login",
    element: <AdminLogin />, // 로그인 페이지
  },
  // 관리자 영역
  {
    path: "/admin",
    element: <BaseRoute />, // AdminLayout 내부에 <Outlet /> 포함
    children: [
      {
        index: true,
        element: <Navigate to="main" replace />, // "/admin" → "/admin/main"
      },
      {
        path: "main",
        element: <AdminLayout />, // 실제 관리자 메인 페이지
      },
      {
        path: "main/*",
        element: <Navigate to="/admin/main" replace />, // 하위 경로도 모두 "/admin/main"으로
      },
      {
        path: "*",
        element: <Navigate to="/admin/main" replace />, // 기타 잘못된 admin 경로도 main으로
      },
    ],
  },

  // 그 외 모든 경로 ("/admin" 외 경로)
  {
    path: "*",
    element: <Navigate to="/admin/login" replace />, // 잘못된 경로는 로그인으로
  },
]);

// 루트에 라우터 제공
// !는 이 값은 절대 null이 아니다라고 TypeScript에게 말해주는 문구임
// 이 파일에서는 export만 합니다 (렌더링은 main.tsx에서)
export default function RouteSetup() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
