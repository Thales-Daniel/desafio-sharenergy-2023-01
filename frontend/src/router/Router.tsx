import React from "react"
import { Route, Routes } from "react-router-dom"
import RequireAuth from "../components/atoms/RequireAuth"
import Header from "../components/organisms/Header"

import Dashboard from "../pages/Dashboard"
import HttpSelectPage from "../pages/HttpSelectPage"
import Login from "../pages/Login"
import RandomDogsPage from "../pages/RandomDogsPage"

function Router() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Header />
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/httpcats"
        element={
          <RequireAuth>
            <Header />
            <HttpSelectPage />
          </RequireAuth>
        }
      />
      <Route
        path="/dogs"
        element={
          <RequireAuth>
            <Header />
            <RandomDogsPage />
          </RequireAuth>
        }
      />
    </Routes>
  )
}
export default Router
