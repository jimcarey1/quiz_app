import React from "react";
import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import AdminPage from "./pages/AdminPage";

async function fetchAuthTokens(){
  await fetch('http://localhost:8000/accounts/refresh', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    credentials: 'include'
  })
}

export default function App(){
  //This will periodically runs every 20 minutes, The first run is after 20 minutes
  //after the user opens the app.
  React.useEffect(()=>{
    const periodicInterval = setInterval(()=>{
      fetchAuthTokens()
    }, 1000*20*60)
    return () => clearTimeout(periodicInterval)
  }, [])

  //When the user first opens or refresh the web page, this effect runs.
  React.useEffect(()=>{
    fetchAuthTokens()
  }, [])
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </React.Fragment>
  )
}