import { Route, Routes } from "react-router-dom";
import Posts from "../Pages/Posts";
import Notifications from "../Pages/Notifications";
import Article from "../Pages/Article";

export default function CodeRoad() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}
