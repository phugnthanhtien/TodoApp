import Project from "./pages/project";
import { Routes, Route } from "react-router-dom";
import Task from "./pages/task";

function App() {
  return (
    <Routes>
      <Route path="/project" element={<Project />} />
      <Route path="/task" element={<Task />} />
    </Routes>
  );
}

export default App;
