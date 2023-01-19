import React from "react"
import AuthProvider from "./contexts/AuthProvider"

import Router from "./router/Router"

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
