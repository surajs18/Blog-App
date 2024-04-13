import { Route, Routes } from "react-router-dom";
import Posts from "../Pages/Posts";

export default function CodeRoad() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}
