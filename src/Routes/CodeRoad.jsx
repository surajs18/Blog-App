import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";

export default function CodeRoad() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
