import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import HttpSelectPage from "../pages/HttpSelectPage"
// import Login from "../pages/Login"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/httpage" element={<HttpSelectPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
