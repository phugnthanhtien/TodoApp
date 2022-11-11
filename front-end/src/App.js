import Project from "./pages/project";
import { Routes, Route } from "react-router-dom";
import Task from "./pages/task";
import React from "react";
import Login from "./pages/log-in";
import SignUpPage from "./pages/sign-up";
import { Provider } from 'mobx'
import { rootStore } from "./stores";

function App() {
  return (
    <Provider {...rootStore}>
      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/task" element={<Task />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </Provider>
  );
}

export default App;
