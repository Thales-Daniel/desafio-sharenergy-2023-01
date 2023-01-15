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
      </Routes>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/httpcats" element={<HttpSelectPage />} />
        <Route path="/dogs" element={<RandomDogsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
