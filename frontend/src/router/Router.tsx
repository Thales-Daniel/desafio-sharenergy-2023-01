import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/organisms/Header"

import Dashboard from "../pages/Dashboard"
import HttpSelectPage from "../pages/HttpSelectPage"
import Login from "../pages/Login"
import RandomDogsPage from "../pages/RandomDogsPage"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/httpcats"
          element={
            <>
              <Header />
              <HttpSelectPage />
            </>
          }
        />
        <Route
          path="/dogs"
          element={
            <>
              <Header />
              <RandomDogsPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
