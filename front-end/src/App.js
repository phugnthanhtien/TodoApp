import Project from "./pages/project";
import { Routes, Route } from "react-router-dom";
import Task from "./pages/task";
import React from "react";
import Login from "./pages/log-in";
import SignUpPage from "./pages/sign-up";

function App() {
  return (
    <Routes>
      <Route path="/project" element={<Project />} />
      <Route path="/task" element={<Task />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUpPage/>} />
    </Routes>
  );
}

export default App;
