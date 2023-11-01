import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HabitList from "./components/HabitList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HabitList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
