import React from "react";
import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import AdminPage from "./pages/AdminPage";
import LibraryPage from "./pages/LibraryPage";
import SessionPage from "./pages/SessionPage";
import QuizBuilderPage from "./pages/QuizEdit";
import CreateQuestionPage from "./pages/AddQuestion";
import ActivityPreviewPage from "./pages/QuizDetailPage";

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
        <Route path="/admin/library" element={<LibraryPage />} />
        <Route path="/admin/reports" element={<SessionPage />} />
        <Route path="/admin/quiz-builder" element={<QuizBuilderPage />} />
        <Route path="/admin/create-question" element={<CreateQuestionPage />} />
        <Route path="/admin/quiz/detail" element={<ActivityPreviewPage />} />
      </Routes>
    </React.Fragment>
  )
}