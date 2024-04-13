import { Route, Routes } from "react-router-dom";
import Posts from "../Pages/Posts";
import Notifications from "../Pages/Notifications";

export default function CodeRoad() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}
