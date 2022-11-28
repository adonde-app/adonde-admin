// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Advert from "./pages/Advert";
import Login from "./pages/Login";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="advert" element={<Advert />} />
    </Routes>
  );
}

export default App;
