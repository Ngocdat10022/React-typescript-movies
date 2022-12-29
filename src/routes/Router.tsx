import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, ResgiterPage, MoviesDetailPage } from "../pages";
import MoviesPage from "../pages/MoviesPage";
const HomePage = lazy(() => import("../pages/HomePage"));
// const MoviesDetailPage = lazy(() => import("~/pages/MoviesDetailPage"));
// const MoviesPage = lazy(() => import("~/pages/MoviesPage"));
const Layout = lazy(() => import("../layouts"));
const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <MoviesPage />
              </>
            }
          />
          <Route
            path="/movies-details/:id"
            element={<MoviesDetailPage />}
          ></Route>
        </Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<ResgiterPage></ResgiterPage>}></Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
