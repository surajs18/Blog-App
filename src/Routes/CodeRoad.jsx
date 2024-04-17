import { Route, Routes } from "react-router-dom";
import Posts from "../Pages/Posts";
import Notifications from "../Pages/Notifications";
import Article from "../Pages/Article";
import Profile from "../Pages/Profile";
import Bookmarks from "../Pages/Bookmarks";
import ViewPosts from "../Pages/ViewPosts";
import CreatePost from "../Pages/CreatePost";

export default function CodeRoad() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/bookmarks" element={<Bookmarks />} />
      <Route path="/profile/posts" element={<ViewPosts />} />
      <Route path="/profile/new-post" element={<CreatePost />} />
    </Routes>
  );
}
